import { motion } from 'framer-motion';
import { rgba } from 'polished';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  display: flex;
  height: 56px;
  max-width: 330px;
  width: 100%;
  background: #eceff9;
  border-radius: 8px;
  padding: 4px;

  ${down('lg')} {
    max-width: 280px;
  }

  &.isLeft {
    justify-content: flex-start;
  }

  &.isCenter {
    justify-content: center;
  }

  &.isRight {
    justify-content: flex-end;
  }

  ${down('sm')} {
    max-width: 100%;
  }
`;

export const AnimatedBlock = styled(motion.div)`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.deepBlue};
  color: white;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  padding: 10px 42px;
  border-radius: 6px;

  &.isRenovation {
    width: 50%;

    ${down('sm')} {
    }
  }

  &.isDeductible {
    width: 33.33%;

    ${down('sm')} {
    }
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const LabelInput = styled.label`
  cursor: pointer;
  position: absolute;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  z-index: 0;

  &.isRenovation {
    width: 50%;

    ${down('sm')} {
    }
  }

  &.isDeductible {
    width: 33.33%;
  }

  &.left {
    left: 0;
  }

  &.center {
    text-align: center;
    left: 33.33%;
  }

  &.right {
    right: 0;
  }

  &.active {
    color: white;
  }

  &.notActive {
    color: ${({ theme }) => rgba(theme.colors.mainBlack, 0.6)};
  }
`;
