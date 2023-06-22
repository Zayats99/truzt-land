import { motion } from 'framer-motion';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

import { Button } from '@/components/Button';

export const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 16px rgba(150, 150, 150, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;

  ${down('lg')} {
    padding-left: 50px;
    padding-right: 50px;
  }

  ${down('md')} {
    height: 60px;
    padding: 0 15px;
  }
`;

export const ButtonStyled = styled(Button)`
  ${down('md')} {
    min-width: 100px;
  }
`;

export const Logo = styled.img`
  user-select: none;
  margin-left: -1.6%;
`;
