import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Heading = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 48px;
  line-height: 1.20833333;
  font-style: normal;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mainBlack};

  ${down('md')} {
    font-size: 40px;
  }
`;
