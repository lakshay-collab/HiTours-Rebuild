import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { croatia } from '../croatiaListingData';

export default function CroatiaListing() {
  return <DestinationListing d={croatia} testId="croatia-listing-page" />;
}

export function CroatiaHolidays() {
  return <EgyptHolidays d={{ ...croatia, plannerSource: 'croatia-holidays', testId: 'croatia-holidays-page' }} />;
}
