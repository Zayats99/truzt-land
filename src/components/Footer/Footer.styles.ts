import { rgba } from 'polished';
import { down } from 'styled-breakpoints';
import styled, { css } from 'styled-components';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

const fontsStyle = css`
  font-family: 'Inter';
  font-style: normal;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.mainBlack};
  overflow: hidden;
`;

export const Wrapper = styled(Container)``;

export const Main = styled.div`
  padding: 53px 0 49px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${down('xl')} {
    justify-content: space-between;
    gap: 60px;
    max-width: 660px;
    margin: 0 auto;
  }

  ${down('md')} {
    flex-direction: column;
  }
`;

export const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  display: flex;
  justify-content: center;
  padding: 8px 0;
`;

export const Block = styled.div`
  width: 100%;

  gap: 18px;

  ${flexColumn}

  &:first-child {
    max-width: 453px;

    ${down('xxl')} {
      max-width: 393px;
    }

    ${down('xl')} {
      max-width: 100%;
    }
  }

  &:nth-child(2) {
    max-width: 531px;

    ${down('xl')} {
      max-width: none;
    }
  }

  &:last-child {
    max-width: 207px;
  }
`;

export const LogoBlock = styled.div`
  img {
    margin-left: -1%;
    ${down('sm')} {
      margin-left: -1.5%;
    }
  }
`;

export const InfoBlock = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const LinksBlock = styled.div`
  display: flex;
  gap: 30px;

  & > .text-link {
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TextLink = styled(Typography)`
  font-size: 14px;
  line-height: 140%;
`;

export const IconLink = styled.a`
  display: block;
  transition: transform 300m ease;

  &:hover {
    transform: scale(1.04);
  }

  svg {
    display: block;
    color: ${({ theme }) => theme.colors.lightGray};
    width: 36px;
    height: 36px;
  }
`;

export const StayTouchWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 38px;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.deepBlue};
  background-image: url('/assets/svg/bg-footer-form.svg');
  background-repeat: no-repeat;
  background-position: 52% 65%;
`;

export const LeftFrame = styled(Icon)`
  position: absolute;
  bottom: -14px;
  left: -13px;
  width: 63px;
  height: 38px;
  color: white;
`;

export const RightBottomFrame = styled(Icon)`
  position: absolute;
  bottom: -14px;
  right: -17px;
  width: 49px;
  height: 44px;
  color: white;
`;
export const RightTopFrame = styled(Icon)`
  position: absolute;
  width: 148px;
  height: 84px;
  top: -16px;
  right: -24px;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  padding-top: 24px;

  ${down('sm')} {
    flex-direction: column;
    gap: 15px;
  }
`;

export const StayTitle = styled(Typography)`
  font-size: 20px;
  line-height: 24px;
`;

export const Input = styled.input`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  padding: 12px 16px;
  background: #f6f6f6;
  border-radius: 8px 0px 0px 8px;
  outline: none;
  border: none;
  color: ${({ theme }) => rgba(theme.colors.mainBlack, 0.7)};

  ${fontsStyle}

  &.isInvalid {
    border: 1px solid red;
  }

  ${down('sm')} {
    border-radius: 8px;
    max-width: 100%;
  }
`;

export const InputButton = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  background: #131111;
  border-radius: 0px 8px 8px 0px;
  padding: 0px 20px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};

  ${fontsStyle}

  ${down('sm')} {
    border-radius: 8px;
    max-width: 100%;
    padding: 10px 26px;
  }
`;

export const ContactWrapper = styled.div`
  ${flexColumn}
`;

export const ContactTitle = styled(Typography)`
  font-size: 20px;
  line-height: 24px;
`;

export const LinkBox = styled.div`
  display: flex;
  color: white;
  gap: 21px;
  margin: 24px 0 18px;
`;

export const AddresPhoneBox = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none !important;

  &.mb {
    margin-bottom: 9px;
  }
`;

export const AddresTypography = styled(Typography)`
  padding-left: 16px;
  font-size: 16px;
  line-height: 19px;
`;

export const AddresIcon = styled(Icon)`
  font-size: 26px;
  color: white;
`;
