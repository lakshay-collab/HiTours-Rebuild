import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { scotland } from '../scotlandListingData';

export default function ScotlandListing() {
  return <DestinationListing d={scotland} testId="scotland-listing-page" />;
}

export function ScotlandHolidays() {
  return <EgyptHolidays d={{ ...scotland, plannerSource: 'scotland-holidays', testId: 'scotland-holidays-page' }} />;
}
