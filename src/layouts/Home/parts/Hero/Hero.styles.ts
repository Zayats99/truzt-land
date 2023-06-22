import { motion } from 'framer-motion';
import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Typography } from '@/components/Typography';
import { HeroBanner } from '@/layouts/Home/parts/Hero/parts/HeroBanner/HeroBanner';

export const Root = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  min-height: 900px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(15, 75, 166, 0.08) 77.07%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${down('md')} {
    min-height: 640px;
  }
`;

export const HeroBannerStyled = styled(HeroBanner)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  min-width: 992px;
  margin-left: -496px;

  ${up('lg')} {
    min-width: 1440px;
    margin-left: -720px;
  }

  ${up('xxl')} {
    min-width: 1920px;
    margin-left: -960px;
  }

  ${up('xxxl')} {
    left: 0;
    width: 100%;
    margin-left: 0;
  }
`;

export const Content = styled(Container)`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  max-height: 78.5%;
  z-index: 2;
`;

export const AnimatedTitleWrapper = styled(motion.div)`
  margin-bottom: 14px;
`;

export const Subtitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.mainBlackLight};
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 52px;

  ${down('md')} {
    max-width: 350px;
  }
`;

export const StartedButton = styled(Button)``;

export const CloudsLayer = styled(motion.div)``;

export const BuidingsLayer = styled(motion.div)``;

export const PeoplesLayer = styled(motion.div)``;

export const PlaneLayer = styled(motion.div)``;

// Todo: opacity 0.15 for background picture, also will have to decreasing them
