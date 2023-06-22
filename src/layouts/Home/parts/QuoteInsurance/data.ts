import type { Variants } from 'framer-motion';
import type { TooltipProps } from 'react-tippy';

export type TPlatformScore = {
  title: string;
  value: number;
};

export const selectItems: TPlatformScore[] = [
  {
    title: 'BitBank',
    value: 69.27,
  },
  {
    title: 'Kraken',
    value: 85.4,
  },
  {
    title: 'Binance',
    value: 90.55,
  },
  {
    title: 'Huobi',
    value: 78.58,
  },
  {
    title: 'itBit',
    value: 58.5,
  },
  {
    title: 'Binance US',
    value: 78.95,
  },
  {
    title: 'Coinbase',
    value: 90.71,
  },
  {
    title: 'Bitstamp',
    value: 75.13,
  },
  {
    title: 'Gemini',
    value: 78.89,
  },
  {
    title: 'Bittrex',
    value: 76.13,
  },
];

export const assetsValueTooltip: TooltipProps = {
  title:
    'This is the value in USD of the crypto that you hold in your exchange',
  position: 'top',
};

export const renovationTooltip: TooltipProps = {
  title: 'Protect your assets in case of an increase in value',
  position: 'top',
};
export const deductibleTooltip: TooltipProps = {
  position: 'top',
  title:
    'Chose if you want to pay annually or monthly. Annual payments have a slight discount',
};

export const variants: Variants = {
  offscreenHeader: {
    opacity: 0,
  },
  onscreenHeader: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  offscreenButton: {
    opacity: 0,
  },
  onscreenButton: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.3,
    },
  },
};
