import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { england } from '../englandListingData';

export default function EnglandListing() {
  return <DestinationListing d={england} testId="england-listing-page" />;
}

export function EnglandHolidays() {
  return <EgyptHolidays d={{ ...england, plannerSource: 'england-holidays', testId: 'england-holidays-page' }} />;
}
