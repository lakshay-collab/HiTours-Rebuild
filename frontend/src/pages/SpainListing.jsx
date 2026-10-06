import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { spain } from '../spainListingData';

export default function SpainListing() {
  return <DestinationListing d={spain} testId="spain-listing-page" />;
}

export function SpainHolidays() {
  return <EgyptHolidays d={{ ...spain, plannerSource: 'spain-holidays', testId: 'spain-holidays-page' }} />;
}
