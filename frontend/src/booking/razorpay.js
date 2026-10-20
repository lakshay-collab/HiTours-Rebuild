// Opens Razorpay Checkout for an order created by the backend. In MOCK mode (no keys configured) a simulated window is shown instead.
const loadScript = () => new Promise((resolve, reject) => {
  if (window.Razorpay) return resolve();
  const s = document.createElement('script');
  s.src = 'https://checkout.razorpay.com/v1/checkout.js';
  s.onload = resolve; s.onerror = () => reject(new Error('Could not load the Razorpay checkout'));
  document.body.appendChild(s);
});

const mockCheckout = (order) => new Promise((resolve, reject) => {
  const wrap = document.createElement('div');
  wrap.className = 'fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4';
  wrap.setAttribute('data-testid', 'mock-razorpay');
  wrap.innerHTML = `
    <div class="bg-white rounded-2xl w-full max-w-[380px] overflow-hidden shadow-2xl">
      <div class="bg-[#072654] text-white px-5 py-4"><p class="text-[12px] uppercase tracking-wide opacity-70">Razorpay · test mode (MOCKED)</p><p class="text-[18px] font-semibold mt-1">Hi Tours</p><p class="text-[14px] opacity-80">Amount: ₹${(order.amount / 100).toLocaleString('en-IN')}</p></div>
      <div class="p-5 flex flex-col gap-3">
        <p class="text-[14px] text-[#002131]">No keys are connected yet, so this window simulates the Razorpay payment sheet.</p>
        <button type="button" data-testid="mock-pay-success" class="eg-btn-filled !h-12 w-full">Simulate successful payment</button>
        <button type="button" data-testid="mock-pay-cancel" class="eg-btn-outlined !h-12 w-full !rounded-full">Cancel</button>
      </div>
    </div>`;
  document.body.appendChild(wrap);
  const done = (fn) => { wrap.remove(); fn(); };
  wrap.querySelector('[data-testid="mock-pay-success"]').onclick = () => done(() => resolve({ razorpay_order_id: order.order_id, razorpay_payment_id: 'pay_MOCK' + Date.now(), razorpay_signature: 'mock' }));
  wrap.querySelector('[data-testid="mock-pay-cancel"]').onclick = () => done(() => reject(new Error('cancelled')));
});

export async function payWithRazorpay(order, { name, email, phone, title, image }) {
  if (order.mock) return mockCheckout(order);
  await loadScript();
  return new Promise((resolve, reject) => {
    const rzp = new window.Razorpay({
      key: order.key_id, amount: order.amount, currency: order.currency, order_id: order.order_id,
      name: 'Hi Tours', description: title, image,
      prefill: { name, email, contact: phone }, notes: { booking_id: order.booking_id }, theme: { color: '#174358' },
      handler: (res) => resolve(res),
      modal: { ondismiss: () => reject(new Error('cancelled')) },
    });
    rzp.on('payment.failed', (res) => reject(new Error(res.error?.description || 'Payment failed')));
    rzp.open();
  });
}
