import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { laos } from '../laosListingData';

export default function LaosListing() {
  return <DestinationListing d={laos} testId="laos-listing-page" />;
}

export function LaosHolidays() {
  return <EgyptHolidays d={{ ...laos, plannerSource: 'laos-holidays', testId: 'laos-holidays-page' }} />;
}
