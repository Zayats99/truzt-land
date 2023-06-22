import { down } from 'styled-breakpoints';
import styled from 'styled-components';

import { textStyle } from '@/components';

export const SelectContainer = styled.select`
  position: relative;
  margin: 0;
  background-color: white;
  background: url('/assets/svg/select-arrow.svg') center no-repeat;
  background-position: 95% center;
  -webkit-appearance: none;

  ${textStyle}

  ${down('sm')} {
    width: 100%;
  }
`;
