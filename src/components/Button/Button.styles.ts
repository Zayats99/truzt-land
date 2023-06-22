import Link from 'next/link';
import { rgba } from 'polished';
import { down } from 'styled-breakpoints';
import styled, { css } from 'styled-components';

import { Icon } from '../Icon';

export const ButtonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  min-width: 100px;
  padding: 0 26px 1px;
  background-color: ${({ theme }) => theme.colors.deepBlue};
  box-shadow: 0px 4px 24px rgba(87, 99, 147, 0.15);
  border-radius: 8px;
  color: #fff;
  outline: none;
  border: 1px solid #e4e4e4;
  transition: background-color 0.3s ease 0s;

  font-family: 'Nexa';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.deepBlue, 0.9)};
  }

  ${down('md')} {
    font-size: 16px;
    height: 46px;
    padding: 0 14px 1px;
  }
`;
export const Button = styled.button`
  ${ButtonCss}

  &.disabled {
    background-color: ${({ theme }) => rgba(theme.colors.deepBlue, 0.7)};
  }
`;

export const LinkStyled = styled(Link)`
  ${ButtonCss}
  text-decoration: none !important;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;

  padding: 0;
  margin: 0;
  margin-bottom: -0.3em;
`;

export const IconArrow = styled(Icon)`
  color: #fff;
  font-size: 0.6em;
  margin-bottom: -0.2em;
  margin-left: 0.79378em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
