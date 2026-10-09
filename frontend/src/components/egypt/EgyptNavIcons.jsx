import React from 'react';
import { Sun, CalendarDays, Wallet, Utensils, Mountain, Footprints, Umbrella, TreePalm, MapPin, Users, Heart, Landmark, Timer, Sailboat, Gem, ArrowUpNarrowWide, ArrowDownWideNarrow, Clock, Leaf, Car, Globe, Sparkles, Ship, PawPrint, Ticket, Waves, Castle, Trees, Snowflake, Wine, Moon, Camera, Train } from 'lucide-react';

const icons = {
  sun: Sun, calendar: CalendarDays, wallet: Wallet, food: Utensils, landscape: Mountain, kayak: Footprints, beach: Umbrella, island: TreePalm, leaf: Leaf, road: Car, globe: Globe,
  pin: MapPin, family: Users, heart: Heart, culture: Landmark, short: Timer, boat: Sailboat, gem: Gem, sortAsc: ArrowUpNarrowWide, sortDesc: ArrowDownWideNarrow, clock: Clock,
  star: Sparkles, ship: Ship, paw: PawPrint, ticket: Ticket, wave: Waves, castle: Castle, tree: Trees, snow: Snowflake, wine: Wine, moon: Moon, camera: Camera, train: Train
};

export const NavIcon = ({ name, size = 24, className = 'text-[#174358]' }) => {
  const I = icons[name];
  return I ? <I size={size} strokeWidth={1.75} className={`shrink-0 ${className}`} aria-hidden /> : null;
};
