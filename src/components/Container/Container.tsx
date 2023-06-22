import type { FC } from 'react';

import * as S from './Container.styles';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>;
};
