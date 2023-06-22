import { motion } from 'framer-motion';
import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const HeroBanner = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(15, 75, 166, 0.08) 77.07%
  );
`;

export const Svg = styled.svg`
  position: absolute;
  bottom: -374px;
  left: 0;
  width: 100%;

  ${up('md')} {
    bottom: -337px;
    left: -20%;
    width: 120%;
  }

  ${up('lg')} {
    bottom: -195px;
    left: -20%;
    width: 130%;
  }

  ${up('xxl')} {
    bottom: -70px;
    left: -19.2%;
    width: 130%;
  }
`;

export const SvgGroup = styled(motion.g)``;
