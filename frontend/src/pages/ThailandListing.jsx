import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import { thailand } from '../thailandListingData';
import { honeymoonVariant } from '../holidays/honeymoonVariant';

export const thailandHoneymoonsPath = '/asien/thailand/honeymoons';

export default function ThailandListing() {
  return <DestinationListing d={thailand} testId="thailand-listing-page" />;
}

export function ThailandHolidays() {
  return <EgyptHolidays d={{ ...thailand, plannerSource: 'thailand-holidays', testId: 'thailand-holidays-page' }} />;
}

const honeymoons = honeymoonVariant(thailand, 'Thailand', thailandHoneymoonsPath);
export function ThailandHoneymoons() {
  return <EgyptHolidays d={honeymoons} />;
}
