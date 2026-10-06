import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { china } from '../chinaListingData';

export default function ChinaListing() {
  return <DestinationListing d={china} testId="china-listing-page" />;
}

export function ChinaHolidays() {
  return <EgyptHolidays d={{ ...china, plannerSource: 'china-holidays', testId: 'china-holidays-page' }} />;
}
