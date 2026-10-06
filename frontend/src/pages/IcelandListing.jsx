import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { iceland } from '../icelandListingData';

export default function IcelandListing() {
  return <DestinationListing d={iceland} testId="iceland-listing-page" />;
}

export function IcelandHolidays() {
  return <EgyptHolidays d={{ ...iceland, plannerSource: 'iceland-holidays', testId: 'iceland-holidays-page' }} />;
}
