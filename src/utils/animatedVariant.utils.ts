import type { Variants } from 'framer-motion';

export const variantsTitle: Variants = {
  offscreenHeader: {
    opacity: 0,
  },
  onscreenHeader: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const sideVariants = {
  x: 0,
  opacity: 1,
  transition: {
    type: 'spring',
    bounce: 0.4,
    duration: 0.8,
  },
};

export const variantsShowLeft: Variants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: sideVariants,
};

export const variantsShowRight: Variants = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: sideVariants,
};
