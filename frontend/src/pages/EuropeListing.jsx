import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { europe } from '../europeListingData';

export default function EuropeListing() {
  return <DestinationListing d={europe} testId="europe-listing-page" />;
}

export function EuropeHolidays() {
  return <EgyptHolidays d={{ ...europe, plannerSource: 'europe-holidays', showCountry: true, testId: 'europe-holidays-page' }} />;
}
