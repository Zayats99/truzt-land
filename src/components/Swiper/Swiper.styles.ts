import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  min-width: 0;

  .overlay {
    --gradient-color: #fcfcfe, rgba(255, 255, 255, 0) !important;
  }
`;

export const Preview = styled.div`
  width: 340px;
  padding-top: 40px;
  padding-bottom: 40px;
  opacity: 0.6;

  ${down('lg')} {
    width: 240px;
  }

  ${down('md')} {
    width: 140px;
  }
`;

export const SwiperImage = styled.div`
  position: relative;
  height: 70px;
`;
