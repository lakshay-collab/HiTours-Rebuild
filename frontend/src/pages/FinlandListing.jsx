import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { finland } from '../finlandListingData';

export default function FinlandListing() {
  return <DestinationListing d={finland} testId="finland-listing-page" />;
}

export function FinlandHolidays() {
  return <EgyptHolidays d={{ ...finland, plannerSource: 'finland-holidays', testId: 'finland-holidays-page' }} />;
}
