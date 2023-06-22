import { motion } from 'framer-motion';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

import { Container, Typography } from '@/components';

export const Root = styled.div``;

export const HowItWorks = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 66px;

  ${down('xxl')} {
    max-width: 1200px;
  }

  ${down('md')} {
    max-width: 450px;

    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const HeadingWrapper = styled.div`
  position: relative;
`;

export const ListWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 99px;
  width: 100%;
  max-width: 1332px;

  ${down('xxl')} {
    left: 0;
  }

  ${down('md')} {
    flex-direction: column;
    margin-top: 40px;
    gap: 40px;
  }
`;

export const ListItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 33.33%;
  max-width: 278px;

  ${down('lg')} {
    padding: 0 20px;
  }

  ${down('md')} {
    width: 100%;
    max-width: none;
    position: relative;
    padding-left: 150px;
    padding-right: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ItemNumberWrapper = styled.div`
  position: absolute;
  top: -28px;
  left: -174px;

  ${down('xxl')} {
    left: -90px;
  }

  ${down('xl')} {
    top: -58px;
    left: -20px;
  }

  ${down('lg')} {
    top: -28px;
    left: -10px;
  }

  ${down('md')} {
    display: none;
  }
`;

export const ItemNumber = styled.img`
  max-width: 123px;

  ${down('xxl')} {
    max-width: 80px;
    height: 72px;
  }

  ${down('lg')} {
    max-width: 60px;
    height: 62px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 278px;
  width: 100%;
  height: 290px;

  ${down('md')} {
    position: absolute;
    width: 130px;
    height: 120px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ItemImg = styled.div`
  max-width: 278px;
  width: 100%;
`;

export const ItemHeader = styled.h4`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  color: #0f4ba6;
  margin-top: 15px;
  margin-bottom: 0;
  text-align: center;

  ${down('lg')} {
    margin-top: 8px;
  }
`;

export const ItemDescription = styled(Typography)`
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-top: 16px;

  ${down('lg')} {
    font-size: 16px;
  }

  ${down('md')} {
    text-align: left;
    margin-top: 6px;
  }
`;
