import { motion } from 'framer-motion';
import { rgba } from 'polished';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

import { Container, Typography } from '@/components';

export const Root = styled(motion.div)`
  position: relative;
  width: 100%;
`;

export const Wrapper = styled(Container)`
  padding-top: 113px;
  padding-bottom: 116px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 21px;

  ${down('xl')} {
    gap: 15px;
  }

  ${down('md')} {
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  z-index: 9;

  &:last-child {
    ${down('md')} {
      flex-wrap: wrap;
    }
  }

  ${down('xl')} {
    gap: 15px;
  }

  ${down('sm')} {
    gap: 10px;
  }
`;

export const CompanyItems = styled(motion.div)`
  padding: 0px 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  & > img {
    max-width: 116px;
    object-fit: contain;
  }

  ${down('xl')} {
    padding: 0 15px;
    gap: 15px;

    &:nth-child(3) {
      display: none;
    }
  }

  ${down('md')} {
    padding: 0 5px;
    gap: 5px;

    & > img {
      width: 80px;
    }
  }
`;

export const IconUp = styled.img`
  position: absolute;
  top: -25px;
  left: -12px;
`;

export const IconDown = styled.img`
  position: absolute;
  bottom: -8px;
  right: -3px;
`;

export const TextBox = styled(motion.div)`
  position: relative;
  overflow: hidden;
  max-width: 408px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 5.25765px 21.0306px rgba(62, 107, 194, 0.1);
  backdrop-filter: blur(26.2883px);

  border-radius: 0px 16px;
`;

export const TextTypography = styled(Typography)`
  color: ${({ theme }) => rgba(theme.colors.mainBlack, 0.8)};
  text-align: center;

  font-size: 18px;
  line-height: 25px;
  user-select: auto;
`;

export const Innertext = styled.span`
  color: ${({ theme }) => theme.colors.deepBlue};
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
`;
