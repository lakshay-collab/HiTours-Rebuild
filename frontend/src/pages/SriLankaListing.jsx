import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { sriLanka } from '../sriLankaListingData';

export default function SriLankaListing() {
  return <DestinationListing d={sriLanka} testId="sri-lanka-listing-page" />;
}

export function SriLankaHolidays() {
  return <EgyptHolidays d={{ ...sriLanka, plannerSource: 'sri-lanka-holidays', testId: 'sri-lanka-holidays-page' }} />;
}
