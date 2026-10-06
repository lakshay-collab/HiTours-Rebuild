import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { italy } from '../italyListingData';

export default function ItalyListing() {
  return <DestinationListing d={italy} testId="italy-listing-page" />;
}

export function ItalyHolidays() {
  return <EgyptHolidays d={{ ...italy, plannerSource: 'italy-holidays', testId: 'italy-holidays-page' }} />;
}
