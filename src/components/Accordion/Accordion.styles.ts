import { motion } from 'framer-motion';
import { rgba } from 'polished';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

import { Typography } from '../Typography';

export const Accordion = styled.div`
  &:not(:first-child) {
    border-top: 2px solid ${({ theme }) => rgba(theme.colors.mainBlack, 0.08)};
  }
  &:last-child {
    border-bottom: 2px solid
      ${({ theme }) => rgba(theme.colors.mainBlack, 0.08)};
  }
`;

export const Header = styled(motion.div)`
  padding: 30px 0 29px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  outline: none;
  text-align: start;

  ${down('md')} {
    padding: 20px 0 19px;
  }

  &:hover {
    font-weight: 900;
  }
`;

export const Title = styled(Typography)`
  font-size: 20px;
  max-width: 635px;
  width: 100%;

  ${down('md')} {
    font-size: 18px;
  }
`;

export const Plus = styled(Typography)`
  font-size: 30px;
  transition: transform 300ms ease;

  ${down('md')} {
    font-size: 26px;
  }

  ${Header}:hover & {
    transform: scale(1.6);

    ${down('md')} {
      transform: scale(1);
    }
  }
`;

export const Body = styled(motion.div)`
  overflow: hidden;
`;

export const TypographyStyled = styled(Typography)`
  font-size: 16px;
  padding-bottom: 30px;
  /* text-align: start; */
`;
