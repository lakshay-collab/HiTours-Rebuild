import React from 'react';
import GroupTourDetail from './GroupTourDetail';
import GroupThankYou from './GroupConfirmed';
import * as tour from '../grouptours/bangkokPattayaData';
import { reviews } from '../thailandListingData';

export default function BangkokPattayaTour() {
  return <GroupTourDetail tour={tour} reviews={reviews} />;
}

export const BangkokPattayaThankYou = () => <GroupThankYou tour={tour} />;
