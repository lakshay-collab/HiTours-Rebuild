import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { sweden } from '../swedenListingData';

export default function SwedenListing() {
  return <DestinationListing d={sweden} testId="sweden-listing-page" />;
}

export function SwedenHolidays() {
  return <EgyptHolidays d={{ ...sweden, plannerSource: 'sweden-holidays', testId: 'sweden-holidays-page' }} />;
}
