import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { southKorea } from '../southKoreaListingData';

export default function SouthKoreaListing() {
  return <DestinationListing d={southKorea} testId="south-korea-listing-page" />;
}

export function SouthKoreaHolidays() {
  return <EgyptHolidays d={{ ...southKorea, plannerSource: 'south-korea-holidays', testId: 'south-korea-holidays-page' }} />;
}
