import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { cambodia } from '../cambodiaListingData';

export default function CambodiaListing() {
  return <DestinationListing d={cambodia} testId="cambodia-listing-page" />;
}

export function CambodiaHolidays() {
  return <EgyptHolidays d={{ ...cambodia, plannerSource: 'cambodia-holidays', testId: 'cambodia-holidays-page' }} />;
}
