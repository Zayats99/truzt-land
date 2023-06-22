import { fontFace } from 'polished';
import type { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
${normalize}

${fontFace({
  fontFamily: 'Inter',
  fontFilePath: '/fonts/Inter-Regular',
  fontWeight: '400',
  fontDisplay: 'swap',
})}
${fontFace({
  fontFamily: 'Nexa',
  fontFilePath: '/fonts/Nexa-Black',
  fontWeight: '900',
  fontDisplay: 'swap',
})}
${fontFace({
  fontFamily: 'Nexa',
  fontFilePath: '/fonts/Nexa-XBold',
  fontWeight: '800',
  fontDisplay: 'swap',
})}
${fontFace({
  fontFamily: 'Nexa',
  fontFilePath: '/fonts/Nexa-Bold',
  fontWeight: '700',
  fontDisplay: 'swap',
})}

:root {
  --scrollbar-width: 0px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

html,
body {
  height: 100%;
  background: #fcfcfe;
}

h1, h2, h3, h4, h5 {
  font-family: ${({ theme }) => theme.families.nexa};
  color: ${({ theme }) => theme.colors.mainBlack};
  line-height: 58px;
}

#__next {
  height: 100%;
}
.tippy-tooltip-content{
  background-color: #99baed;
  padding: 15px;
  color: black;
  width: 200px;

  font-family: 'Nexa';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #FFFEFF;
  border-radius: 8px;
  z-index: 99;
}
`;
