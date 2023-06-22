import styled from 'styled-components';

export const Typography = styled.p`
  padding: 0;
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;

  &.lightGray {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  &.mainBlack {
    color: ${({ theme }) => theme.colors.mainBlack};
  }

  &.gray {
    color: ${({ theme }) => theme.colors.gray};
  }

  &.white {
    color: ${({ theme }) => theme.colors.white};
  }

  &.regular {
    font-weight: 400;
  }

  &.regularBold {
    font-weight: 500;
  }

  &.bold {
    font-weight: 700;
  }

  &.medium {
    font-weight: 600;
  }

  &.black {
    font-weight: 900;
  }
`;
