import { motion } from 'framer-motion';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

import { Button, Container, Typography } from '@/components';

export const Root = styled.div`
  padding: 164px 0;

  ${down('xxl')} {
    padding: 140px 0;
  }

  ${down('xl')} {
    padding: 40px 0;
  }

  ${down('md')} {
    padding: 40px 0;
  }
`;

export const OurApproach = styled(Container)`
  position: relative;

  ${down('xxl')} {
    max-width: 1200px;
  }

  ${down('md')} {
    max-width: 438px;
  }
`;

export const Box = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 532px;
  width: 100%;
  z-index: 1;

  ${down('xxl')} {
    &:last-child {
      margin-left: -15%;
      z-index: -1;
    }
  }

  ${down('lg')} {
    max-width: 370px;
  }

  ${down('md')} {
    max-width: none;
    align-items: center;
    text-align: center;
  }
`;

export const BackgroundLeft = styled.img`
  position: absolute;
  top: -182px;
  left: -240px;

  ${down('xxl')} {
    display: none;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 45px;
  margin-bottom: 16px;
  margin-top: 35px;

  & > i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.deepBlue};
  }

  ${down('lg')} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  ${down('md')} {
    display: block;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 50px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.deepBlue};

  ${down('md')} {
    display: none;
  }
`;

export const Description = styled(Typography)`
  width: 450px;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.mainBlack};

  ${down('lg')} {
    font-size: 14px;
    line-height: 24px;
  }

  ${down('md')} {
    width: auto;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 234px;
  height: 50px;
  padding: 11px 24px;
  margin-top: 53px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  ${down('md')} {
    width: auto;
    margin-top: 30px;
  }
`;

export const Preview = styled(motion.div)`
  position: absolute;
  font-size: 16px;
  width: 61.0625em;
  height: 31.6875em;

  top: -79px;
  right: -163px;

  @media (max-width: 1740px) {
    right: -135px;
  }

  ${down('xl')} {
    font-size: 14px;
    top: -109px;
    right: -125px;
  }

  ${down('lg')} {
    top: -79px;
    right: -115px;
    font-size: 12px;
  }

  ${down('md')} {
    display: none;
  }
`;

export const ImageFormContainer = styled.div`
  position: relative;
  display: block;
  width: 61.0625em;
  height: 31.6875em;

  ${down('xl')} {
    opacity: 0.35;
  }

  ${down('md')} {
    display: none;
  }
`;

export const FormImage = styled.div`
  position: absolute;
  top: 6.9em;
  left: 18.1em;
  width: 33.5625em;
  height: 28.25em;

  ${down('md')} {
    display: none;
  }
`;

export const CoinTop = styled.img`
  position: absolute;
  top: -2.4em;
  right: 7.8em;
  width: 5.625em;
  height: 6.75em;

  ${down('xl')} {
    display: none;
  }
`;

export const CoinBottom = styled.img`
  position: absolute;
  left: -0.9em;
  bottom: -0.3em;
  width: 5.875em;
  height: 6.6875em;

  ${down('xl')} {
    opacity: 0.35;
  }

  ${down('md')} {
    display: none;
  }
`;
