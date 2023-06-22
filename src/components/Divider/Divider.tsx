import { rgba } from 'polished';
import type { FC } from 'react';
import styled from 'styled-components';

export interface DividerProps {
  className?: string;
}

const Root = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.mainBlack, 0.08)};
`;

export const Divider: FC<DividerProps> = ({ className }) => {
  return <Root className={className}></Root>;
};
