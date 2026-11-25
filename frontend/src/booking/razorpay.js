// Opens Razorpay Checkout for an order created by the backend. In MOCK mode (no keys configured) a Razorpay-style
// simulated sheet (UPI / cards / netbanking / wallets) is shown instead and no money moves.
const loadScript = () => new Promise((resolve, reject) => {
  if (window.Razorpay) return resolve();
  const s = document.createElement('script');
  s.src = 'https://checkout.razorpay.com/v1/checkout.js';
  s.onload = resolve; s.onerror = () => reject(new Error('Could not load the Razorpay checkout'));
  document.body.appendChild(s);
});

const inr = (p) => `₹${(p / 100).toLocaleString('en-IN')}`;
const METHODS = [
  ['upi', 'UPI', 'Google Pay, PhonePe, Paytm and any UPI app'],
  ['card', 'Card', 'Visa, Mastercard, RuPay, Amex'],
  ['netbanking', 'Netbanking', 'All Indian banks'],
  ['wallet', 'Wallet', 'Paytm, PhonePe, Amazon Pay'],
];
const PANES = {
  upi: `<p class="rz-label">Pay with UPI ID</p><input data-testid="mock-upi-id" class="rz-input" placeholder="yourname@upi" />
        <p class="rz-or">or scan the QR code with any UPI app</p>
        <div class="rz-qr"><div class="rz-qr-grid">${Array.from({ length: 64 }, (_, i) => `<i style="opacity:${((i * 7919) % 11) > 5 ? 1 : 0}"></i>`).join('')}</div></div>`,
  card: `<p class="rz-label">Card number</p><input data-testid="mock-card-number" class="rz-input" placeholder="1234 5678 9012 3456" inputmode="numeric" />
        <div class="rz-row"><div><p class="rz-label">Expiry</p><input class="rz-input" placeholder="MM / YY" /></div><div><p class="rz-label">CVV</p><input class="rz-input" placeholder="•••" /></div></div>
        <p class="rz-label">Name on card</p><input class="rz-input" placeholder="Name as on card" />`,
  netbanking: `<p class="rz-label">Choose your bank</p><div class="rz-banks">${['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak', 'Yes Bank'].map((b) => `<button type="button" class="rz-bank">${b}</button>`).join('')}</div>`,
  wallet: `<p class="rz-label">Choose a wallet</p><div class="rz-banks">${['Paytm', 'PhonePe', 'Amazon Pay', 'Mobikwik', 'Freecharge', 'Airtel Money'].map((b) => `<button type="button" class="rz-bank">${b}</button>`).join('')}</div>`,
};

const STYLE = `
.rz-wrap{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.6);display:flex;align-items:flex-end;justify-content:center;padding:0}
@media(min-width:640px){.rz-wrap{align-items:center;padding:16px}}
.rz-sheet{background:#fff;width:100%;max-width:420px;border-radius:20px 20px 0 0;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.4);font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column;max-height:92vh}
@media(min-width:640px){.rz-sheet{border-radius:16px}}
.rz-head{background:#072654;color:#fff;padding:14px 18px;display:flex;align-items:center;gap:12px}
.rz-logo{width:40px;height:40px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;color:#174358;font-size:13px}
.rz-head p{margin:0}.rz-head .n{font-weight:600;font-size:15px}.rz-head .d{font-size:12px;opacity:.8}
.rz-amt{margin-left:auto;text-align:right}.rz-amt .a{font-size:18px;font-weight:700}.rz-amt .t{font-size:10px;opacity:.75;letter-spacing:.3px;text-transform:uppercase}
.rz-test{background:#FFF4D6;color:#8A5A00;font-size:11px;padding:6px 18px;font-weight:600;text-align:center}
.rz-body{display:flex;min-height:300px;overflow:auto}
.rz-nav{width:122px;background:#F5F7FA;border-right:1px solid #E6EAF0;display:flex;flex-direction:column}
.rz-nav button{all:unset;cursor:pointer;padding:12px 10px;font-size:13px;color:#263238;border-left:3px solid transparent}
.rz-nav button.on{background:#fff;border-left-color:#3395FF;font-weight:600;color:#072654}
.rz-pane{flex:1;padding:14px 16px;display:flex;flex-direction:column;gap:8px}
.rz-label{font-size:12px;color:#5B6B74;margin:4px 0 0}
.rz-input{height:40px;border:1px solid #CFD8DC;border-radius:6px;padding:0 10px;font-size:14px;width:100%;box-sizing:border-box}
.rz-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.rz-or{font-size:12px;color:#90A4AE;text-align:center;margin:6px 0 0}
.rz-qr{display:flex;justify-content:center}.rz-qr-grid{display:grid;grid-template-columns:repeat(8,10px);gap:2px;padding:8px;border:1px solid #CFD8DC;border-radius:8px}.rz-qr-grid i{display:block;width:10px;height:10px;background:#072654}
.rz-banks{display:grid;grid-template-columns:1fr 1fr;gap:8px}.rz-bank{all:unset;cursor:pointer;border:1px solid #CFD8DC;border-radius:8px;padding:10px;font-size:13px;text-align:center;color:#263238}.rz-bank.on{border-color:#3395FF;background:#EEF6FF}
.rz-foot{padding:12px 16px 16px;border-top:1px solid #E6EAF0;display:flex;flex-direction:column;gap:8px}
.rz-pay{all:unset;box-sizing:border-box;cursor:pointer;background:#3395FF;color:#fff;font-weight:600;font-size:15px;height:46px;border-radius:6px;text-align:center;width:100%}
.rz-cancel{all:unset;cursor:pointer;font-size:12px;color:#5B6B74;text-align:center}
.rz-secure{font-size:11px;color:#90A4AE;text-align:center}
.rz-proc{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:40px 16px;color:#263238;font-size:14px}
.rz-spin{width:36px;height:36px;border:3px solid #CFD8DC;border-top-color:#3395FF;border-radius:50%;animation:rzspin .8s linear infinite}
@keyframes rzspin{to{transform:rotate(360deg)}}`;

const mockCheckout = (order, { name, phone, email, title }) => new Promise((resolve, reject) => {
  if (!document.getElementById('rz-mock-style')) { const st = document.createElement('style'); st.id = 'rz-mock-style'; st.textContent = STYLE; document.head.appendChild(st); }
  const wrap = document.createElement('div');
  wrap.className = 'rz-wrap';
  wrap.setAttribute('data-testid', 'mock-razorpay');
  let method = 'upi';
  const render = () => {
    wrap.innerHTML = `
      <div class="rz-sheet" role="dialog" aria-label="Razorpay payment">
        <div class="rz-head"><div class="rz-logo">HI</div><div><p class="n">Hi Tours</p><p class="d">${title}</p></div><div class="rz-amt"><p class="t">Amount</p><p class="a">${inr(order.amount)}</p></div></div>
        <div class="rz-test">Test mode · simulated Razorpay sheet, no money will be charged</div>
        <div class="rz-body">
          <div class="rz-nav">${METHODS.map(([k, l]) => `<button type="button" data-method="${k}" data-testid="mock-method-${k}" class="${k === method ? 'on' : ''}">${l}</button>`).join('')}</div>
          <div class="rz-pane"><p style="margin:0;font-weight:600;font-size:14px;color:#072654">${METHODS.find(([k]) => k === method)[1]}</p><p class="rz-label" style="margin:0">${METHODS.find(([k]) => k === method)[2]}</p>${PANES[method]}
            <p class="rz-label" style="margin-top:auto">Paying as ${name} · ${phone}${email ? ` · ${email}` : ''}</p></div>
        </div>
        <div class="rz-foot">
          <button type="button" class="rz-pay" data-testid="mock-pay-success">Pay ${inr(order.amount)}</button>
          <button type="button" class="rz-cancel" data-testid="mock-pay-cancel">Cancel payment</button>
          <p class="rz-secure">Secured by Razorpay · PCI DSS compliant</p>
        </div>
      </div>`;
    wrap.querySelectorAll('[data-method]').forEach((b) => { b.onclick = () => { method = b.dataset.method; render(); }; });
    wrap.querySelectorAll('.rz-bank').forEach((b) => { b.onclick = () => { wrap.querySelectorAll('.rz-bank').forEach((x) => x.classList.remove('on')); b.classList.add('on'); }; });
    wrap.querySelector('[data-testid="mock-pay-success"]').onclick = () => {
      wrap.querySelector('.rz-body').outerHTML = '<div class="rz-proc" data-testid="mock-processing"><div class="rz-spin"></div><p>Processing your payment…</p><p style="font-size:12px;color:#90A4AE;margin:0">Do not close this window</p></div>';
      wrap.querySelector('.rz-foot').style.visibility = 'hidden';
      setTimeout(() => { wrap.remove(); resolve({ razorpay_order_id: order.order_id, razorpay_payment_id: 'pay_MOCK' + Date.now(), razorpay_signature: 'mock' }); }, 1400);
    };
    wrap.querySelector('[data-testid="mock-pay-cancel"]').onclick = () => { wrap.remove(); reject(new Error('cancelled')); };
  };
  render();
  document.body.appendChild(wrap);
});

export async function payWithRazorpay(order, { name, email, phone, title, image }) {
  if (order.mock) return mockCheckout(order, { name, phone, email, title });
  await loadScript();
  return new Promise((resolve, reject) => {
    const rzp = new window.Razorpay({
      key: order.key_id, amount: order.amount, currency: order.currency, order_id: order.order_id,
      name: 'Hi Tours', description: title, image: `${window.location.origin}/icon-192.png`,
      prefill: { name, email, contact: phone }, notes: { booking_id: order.booking_id }, theme: { color: '#174358' },
      handler: (res) => resolve(res),
      modal: { ondismiss: () => reject(new Error('cancelled')) },
    });
    rzp.on('payment.failed', (res) => reject(new Error(res.error?.description || 'Payment failed')));
    rzp.open();
  });
}
