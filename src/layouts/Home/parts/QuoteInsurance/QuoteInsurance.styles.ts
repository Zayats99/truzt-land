import { motion } from 'framer-motion';
import { rgba } from 'polished';
import { between, down } from 'styled-breakpoints';
import styled, { css } from 'styled-components';

import {
  Container,
  Divider,
  Icon,
  InputOutline,
  Typography,
} from '@/components';
import { Select } from '@/layouts/Home/parts/QuoteInsurance/parts';

export const Root = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;

  ${down('lg')} {
    padding-bottom: 40px;
    padding-top: 40px;
    /* max-width: 660px; */
  }
`;

export const AnimatedTitleWrapper = styled(motion.div)`
  ${down('sm')} {
    text-align: center;
  }
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${down('xxl')} {
    max-width: 1200px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 74px;

  ${down('lg')} {
    max-width: 500px;
  }
`;

export const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 64px;

  ${down('xl')} {
    gap: 32px;
  }

  &.isEndPos {
    justify-content: flex-end;
    align-items: center;
  }

  ${down('lg')} {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 30px;
  }

  ${down('sm')} {
    gap: 20px;
  }
`;

export const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${down('sm')} {
    gap: 20px;
  }

  &.w60 {
    width: calc(56.7% - 32px);
    max-width: 620px;

    ${down('xl')} {
      width: calc(50% - 16px);
    }
  }

  &.w40 {
    width: calc(43.3% - 32px);

    ${down('xl')} {
      width: calc(50% - 16px);
    }

    ${between('xl', 'md')} {
      max-width: 500px;
    }
  }

  ${down('lg')} {
    &.w40,
    &.w60 {
      width: 500px;
    }
  }

  ${down('sm')} {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  ${down('sm')} {
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const AmoutText = styled.span`
  color: ${({ theme }) => theme.colors.deepBlue};
  font-weight: 700;
  font-size: 1.22222;
`;

export const LabelInput = styled(Typography)`
  font-size: 20px;

  ${down('md')} {
    font-size: 18px;
  }

  ${down('sm')} {
    margin-right: auto;
  }
`;

export const FormControlCSS = css`
  width: 100%;
  max-width: 370px;
  flex-shrink: 0;

  ${down('xl')} {
    max-width: 330px;
  }

  ${down('lg')} {
    max-width: 280px;
  }

  ${down('sm')} {
    max-width: 100%;
  }
`;

export const FormInput = styled(InputOutline)`
  ${FormControlCSS}
`;

export const SelectStyled = styled(Select)`
  ${FormControlCSS}
`;

export const StyledDiveder = styled(Divider)`
  margin: 36px 0;

  ${down('lg')} {
    margin: 36px auto;
  }

  ${down('sm')} {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const TooltipBox = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const InfoIcon = styled(Icon)`
  display: block;
  font-size: 1.3em;
  margin-bottom: -0.2em;
  color: ${({ theme }) => rgba(theme.colors.mainBlack, 0.8)};
`;
