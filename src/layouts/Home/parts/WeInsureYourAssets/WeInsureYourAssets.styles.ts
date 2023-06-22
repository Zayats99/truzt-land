import { motion } from 'framer-motion';
import { down } from 'styled-breakpoints';
import styled, { css } from 'styled-components';

import { Container, Typography } from '@/components';

export const Root = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  padding-top: 124px;

  ${down('lg')} {
    padding-bottom: 0;
    padding-top: 40px;
    /* max-width: 660px; */
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &:first-child {
    max-width: 712px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 60px;
    text-align: center;

    ${down('lg')} {
      max-width: 500px;
      margin-bottom: 20px;
    }
  }
`;
const arrowStyles = css`
  position: absolute;
  max-width: 101px;
  width: 100%;
  height: 102px;

  ${down('md')} {
    display: none;
  }
`;

export const ArrowRight = styled(motion.div)`
  left: -94px;
  top: -66px;

  ${arrowStyles}
`;

export const ArrowLeft = styled(motion.div)`
  right: -94px;
  top: -64px;

  ${arrowStyles}
`;

export const Paragraph = styled(Typography)`
  font-family: 'Nexa';
  font-size: 32px;
  line-height: 1.5;
  text-transform: uppercase;

  ${down('lg')} {
    font-size: 24px;
  }
`;
