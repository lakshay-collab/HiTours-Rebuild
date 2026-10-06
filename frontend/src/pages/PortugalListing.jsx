import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { portugal } from '../portugalListingData';

export default function PortugalListing() {
  return <DestinationListing d={portugal} testId="portugal-listing-page" />;
}

export function PortugalHolidays() {
  return <EgyptHolidays d={{ ...portugal, plannerSource: 'portugal-holidays', testId: 'portugal-holidays-page' }} />;
}
