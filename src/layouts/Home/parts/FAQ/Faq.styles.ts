import { motion } from 'framer-motion';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

import { Container } from '@/components';

export const Root = styled.div`
  padding-top: 60px;
  padding-bottom: 80px;

  ${down('md')} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Wrapper = styled(Container)`
  position: relative;
  display: flex;

  ${down('xxl')} {
    max-width: 1200px;
  }

  ${down('lg')} {
    max-width: 660px;
  }
`;

export const Box = styled(motion.div)`
  position: relative;
  padding-left: 8px;
  width: 50%;

  ${down('xl')} {
    padding-left: 15px;
    padding-right: 15px;
  }
  ${down('lg')} {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }

  &:first-child {
    ${down('xl')} {
      display: flex;
      justify-content: center;
    }

    ${down('lg')} {
      display: none;
    }
  }
`;

export const Picture = styled.div`
  position: relative;
  margin-top: 65px;
  max-width: 553px;
  width: 100%;
  height: 512px;
  margin-left: 0;

  ${down('xl')} {
    margin-left: 0;
  }
`;

export const Content = styled(motion.div)`
  margin-top: 44px;
`;

export const QuestionPicture = styled.div`
  position: absolute;
  top: 0;
  right: -100px;
  max-width: 160px;
  height: 104px;
  width: 100%;

  ${down('lg')} {
    max-width: 120px;
    right: -50px;
  }
`;

export const AnimatedHeader = styled(motion.div)``;
