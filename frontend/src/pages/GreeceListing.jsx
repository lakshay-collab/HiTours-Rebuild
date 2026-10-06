import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { greece } from '../greeceListingData';

export default function GreeceListing() {
  return <DestinationListing d={greece} testId="greece-listing-page" />;
}

export function GreeceHolidays() {
  return <EgyptHolidays d={{ ...greece, plannerSource: 'greece-holidays', testId: 'greece-holidays-page' }} />;
}
