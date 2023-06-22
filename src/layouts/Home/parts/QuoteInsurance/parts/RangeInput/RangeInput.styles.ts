import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Root = styled.div`
  max-width: 330px;
  width: 100%;

  ${down('lg')} {
    max-width: 280px;
  }

  ${down('sm')} {
    max-width: none;
  }
`;

export const RangeTrackWrapper = styled.div`
  height: 36px;
  display: flex;
  width: 100%;
`;
export const RangeTrack = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 4px;
  align-self: center;
`;

export const RangeThumb = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px #aaa;
`;

export const Thumb = styled.div`
  height: 16px;
  width: 5px;
  background: #eceff9;

  .isDragged {
    background: ${({ theme }) => theme.colors.deepBlue};
  }
`;
