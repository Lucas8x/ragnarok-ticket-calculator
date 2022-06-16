import { IWpPrices, IWpRops } from '../interfaces';

import {
  WP_PRICES,
  WP_TO_ROPS,
  WP_TO_ROPS_BONUS_PERCENT,
  PIN_BONUS,
} from '../data';

export function getWpByAmount(wp: number): Array<IWpPrices> {
  const filteredWp = WP_PRICES.filter((item: IWpPrices) => item.wp >= wp);
  return filteredWp;
}

export function getWpByPrice(price: number): Array<IWpPrices> {
  const filteredWp = WP_PRICES.filter((item: IWpPrices) => item.price <= price);
  return filteredWp;
}

export function getRopsByAmount(rops: number): Array<IWpRops> {
  const filteredRops = WP_TO_ROPS.filter((item: IWpRops) => item.rops >= rops);
  return filteredRops;
}

export function getRopsByWp(wp: number): Array<IWpRops> {
  const filteredRops = WP_TO_ROPS.filter((item: IWpRops) => item.wp >= wp);
  return filteredRops;
}
