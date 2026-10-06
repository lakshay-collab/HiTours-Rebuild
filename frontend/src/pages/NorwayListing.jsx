import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { norway } from '../norwayListingData';

export default function NorwayListing() {
  return <DestinationListing d={norway} testId="norway-listing-page" />;
}

export function NorwayHolidays() {
  return <EgyptHolidays d={{ ...norway, plannerSource: 'norway-holidays', testId: 'norway-holidays-page' }} />;
}
