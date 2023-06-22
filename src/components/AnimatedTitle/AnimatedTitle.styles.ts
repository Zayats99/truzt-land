import { motion } from 'framer-motion';
import { down } from 'styled-breakpoints';
import styled, { css } from 'styled-components';

import { AnimatedLine } from '@/components/AnimatedTitle/parts/AnimatedLine';

export const AnimatedWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Underline = styled.span`
  position: relative;
  white-space: nowrap;
`;

export const HeadingCss = css`
  padding: 0;
  margin: 0;
  font-size: 48px;
  line-height: 1.20833333;
  font-style: normal;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mainBlack};

  ${down('lg')} {
    font-size: 44px;
  }

  ${down('md')} {
    font-size: 40px;
  }

  &.isH1 {
    font-size: 64px;
    margin-bottom: 0;

    ${down('lg')} {
      font-size: 48px;
    }

    ${down('md')} {
      font-size: 42px;
    }
  }
`;

export const Heading1 = styled.h1`
  ${HeadingCss}
`;
export const Heading2 = styled.h2`
  ${HeadingCss}
`;

export const AnimatedLineStyled = styled(AnimatedLine)``;
