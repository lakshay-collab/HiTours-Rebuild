import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { japan } from '../japanListingData';

export default function JapanListing() {
  return <DestinationListing d={japan} testId="japan-listing-page" />;
}

export function JapanHolidays() {
  return <EgyptHolidays d={{ ...japan, plannerSource: 'japan-holidays', testId: 'japan-holidays-page' }} />;
}
