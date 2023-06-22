import 'styled-components';

type StyledComponentsBreakpointsType = {
  [name in 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: string;
};

type StyledComponentsFamiliesType = {
  [name in 'inter' | 'nexa']: string;
};

type StyledComponentsHeadingSizesType = {
  title: string[];
  h1: string[];
  h2: string[];
  h2Alt: string[];
  h3: string[];
  h4: string[];
  h5: string[];
  base: string;
};

type StyledComponentsHeadingLineHeights = {
  title: string[];
  h1: string[];
  h2: string[];
  h2Alt: string[];
  h3: string[];
  h4: string[];
  h5: string[];
};

type StyledComponentsParagraphsType = {
  l: string[];
  m: string[];
  s: string[];
  xs: string[];
  base: string[];
};

type StyledComponentsParagraphsCyrillicType = {
  l: string[];
  m: string[];
  s: string[];
  xs: string[];
  base: string[];
};

type StyledComponentsColorsType = {
  [name in
    | 'white'
    | 'black'
    | 'mainBlack'
    | 'mainBlackLight'
    | 'gray'
    | 'lightGray'
    | 'deepBlue']: string;
};

type StyledComponentsContainersType = {
  [name in 'xxl' | 'xl' | 'md' | 'sm' | 'base']: number;
};

type StyledComponentsGap = {
  [name in 'xxl' | 'xl' | 'md' | 'sm']: number;
};

type StyledComponentsZIndex = {
  [name in
    | 'dropdown'
    | 'sticky'
    | 'fixed'
    | 'modalBackdrop'
    | 'modal'
    | 'popover'
    | 'tooltip'
    | 'hidden']: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    ['styled-breakpoints']: {
      breakpoints: StyledComponentsBreakpointsType;
    };
    families: StyledComponentsFamiliesType;
    // headingSizes: StyledComponentsHeadingSizesType;
    // headingLineHeights: StyledComponentsHeadingLineHeights;
    // paragraphs: StyledComponentsParagraphsType;
    // paragraphsCyrillic: StyledComponentsParagraphsCyrillicType;
    colors: StyledComponentsColorsType;
    // container: StyledComponentsContainersType;
    // gap: StyledComponentsGap;
    // zIndex: StyledComponentsZIndex;
  }
}
