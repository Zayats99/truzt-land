import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AnimatedLine = styled(motion.span)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
`;

export const Inner = styled(motion.span)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  backface-visibility: hidden;
  transform-origin: 100% 100%;
`;

export const Svg = styled(motion.svg)`
  display: block;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
`;

// export const AnimatedLine = styled(motion.div)`
//   position: absolute;
//   bottom: -0.1em;
//   right: 0;
//   width: 100%;

//   &:before {
//     content: '';
//     display: block;
//     padding-bottom: 1.38%;
//   }
// `;

// export const Inner = styled(motion.div)`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: auto;
//   height: 100%;
//   overflow: hidden;
// `;

// export const Svg = styled(motion.svg)`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: auto;
//   height: 100%;
// `;
