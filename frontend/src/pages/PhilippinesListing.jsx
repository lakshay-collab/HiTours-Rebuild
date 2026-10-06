import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { philippines } from '../philippinesListingData';

export default function PhilippinesListing() {
  return <DestinationListing d={philippines} testId="philippines-listing-page" />;
}

export function PhilippinesHolidays() {
  return <EgyptHolidays d={{ ...philippines, plannerSource: 'philippines-holidays', testId: 'philippines-holidays-page' }} />;
}
