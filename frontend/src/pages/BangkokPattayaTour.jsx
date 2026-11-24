import React from 'react';
import GroupTourDetail from './GroupTourDetail';
import GroupThankYou from './GroupConfirmed';
import * as tour from '../grouptours/bangkokPattayaData';
import { reviews } from '../thailandListingData';
import * as europe from '../grouptours/grandWondersEuropeData';
import { reviews as europeReviews } from '../europeListingData';

export default function BangkokPattayaTour() {
  return <GroupTourDetail tour={tour} reviews={reviews} />;
}

export const BangkokPattayaThankYou = () => <GroupThankYou tour={tour} />;

export const EuropeGroupTour = () => <GroupTourDetail tour={europe} reviews={europeReviews} />;
export const EuropeGroupThankYou = () => <GroupThankYou tour={europe} />;
