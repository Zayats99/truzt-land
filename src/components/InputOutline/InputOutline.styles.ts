import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const textStyle = css`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;

  letter-spacing: 0.15px;
  color: ${({ theme }) => rgba(theme.colors.mainBlack, 0.7)};

  padding: 12px 14px;
  border: 1px solid ${({ theme }) => rgba(theme.colors.mainBlack, 0.23)};
  border-radius: 8px;
  outline: none;

  &:active,
  &:focus {
    transition: color 0.3s ease 0s;

    border: 1px solid ${({ theme }) => rgba(theme.colors.mainBlack, 0.8)};
  }

  &.isInValid {
    border: 1px solid red;
  }
`;

export const InputText = styled.input`
  ${textStyle}
`;
