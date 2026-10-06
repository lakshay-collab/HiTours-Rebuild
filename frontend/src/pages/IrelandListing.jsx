import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { ireland } from '../irelandListingData';

export default function IrelandListing() {
  return <DestinationListing d={ireland} testId="ireland-listing-page" />;
}

export function IrelandHolidays() {
  return <EgyptHolidays d={{ ...ireland, plannerSource: 'ireland-holidays', testId: 'ireland-holidays-page' }} />;
}
