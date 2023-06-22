import type { FC } from 'react';

import * as S from './Heading.styles';

export interface HeadingProps {
  className?: string;
  as?: any;
  children: React.ReactNode;
}

export const Heading: FC<HeadingProps> = ({ className, as, children }) => {
  return (
    <S.Heading as={as} className={className}>
      {children}
    </S.Heading>
  );
};
