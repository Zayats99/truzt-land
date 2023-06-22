import { motion } from 'framer-motion';
import { rgba } from 'polished';
import { down } from 'styled-breakpoints';
import styled, { css } from 'styled-components';

import { Button, Container, textStyle } from '@/components';

export const Root = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 120px;

  ${down('lg')} {
    padding-top: 40px;
    padding-bottom: 80px;
  }
`;

export const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;

  ${down('xxl')} {
    max-width: 1200px;
  }

  ${down('lg')} {
    max-width: 660px;
    margin: 0 auto;
  }
`;

export const BgPicture = styled.div`
  position: absolute;
  left: 0;
  bottom: -35%;
  width: 100%;
  height: 925px;
  z-index: -1;

  ${down('xl')} {
    width: 150%;
  }
`;

const boxStyles = css`
  width: 50%;

  ${down('lg')} {
    width: 100%;
  }
`;

export const Box = styled.div`
  ${boxStyles}
`;

export const PictureBox = styled(motion.div)`
  ${boxStyles}

  ${down('xxl')} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${down('lg')} {
    display: none;
  }
`;

export const FormGetInToch = styled.form`
  ${down('lg')} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FormBody = styled(motion.div)`
  margin-top: 56px;
  max-width: 567px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${down('lg')} {
    max-width: 660px;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  position: absolute;
  top: -5px;
  left: 16px;
  padding: 0 5px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  background-color: white;
  color: ${({ theme }) => rgba(theme.colors.mainBlack, 0.6)};
`;

export const Textarea = styled.textarea`
  resize: none;
  height: 158px;

  ${textStyle}
`;

export const ButtonSubmit = styled(Button)`
  box-sizing: border-box;
  width: 100%;
  max-width: 230px;
`;

export const Picture = styled.div`
  position: relative;
  margin-top: -34px;
  width: 100%;
  max-width: 600px;
  height: 592px;
  margin-left: auto;
  margin-right: -68px;
`;
