import { createTheme } from 'styled-breakpoints';
import type { DefaultTheme } from 'styled-components';

import type { StyledComponentsBreakpointsType } from '@/styles/styled';

export const families = {
  inter: 'Inter',
  nexa: 'Nexa',
};

export const colors = {
  white: '#ffffff',
  black: '#000000',

  mainBlack: '#35363E',
  mainBlackLight: 'rgba(53, 54, 62, 0.8)',

  gray: 'rgba(53, 54, 62, 0.2)',
  lightGray: 'rgba(255, 255, 255, 0.8)',

  deepBlue: '#0F4BA6',
};

export const breakpoints = {
  sm: 568,
  md: 738,
  lg: 992,
  xl: 1280,
  xxl: 1440,
  xxxl: 1920,
};

export const container = {
  padding: 30,
};

const breakpointsTheme = Object.keys(breakpoints).reduce(
  (accumulator, key) => ({
    ...accumulator,
    [key]: `${
      breakpoints[key as keyof typeof breakpoints] + container.padding
    }px`,
  }),
  {} as { [key: string]: string }
);

const breakpoint = createTheme(
  breakpointsTheme as StyledComponentsBreakpointsType
)['styled-breakpoints'];

export const defaultTheme: DefaultTheme = {
  'styled-breakpoints': breakpoint,
  families,
  colors,
};
