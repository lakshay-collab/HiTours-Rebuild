import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { indonesia } from '../indonesiaListingData';

export default function IndonesiaListing() {
  return <DestinationListing d={indonesia} testId="indonesia-listing-page" />;
}

export function IndonesiaHolidays() {
  return <EgyptHolidays d={{ ...indonesia, plannerSource: 'indonesia-holidays', testId: 'indonesia-holidays-page' }} />;
}
