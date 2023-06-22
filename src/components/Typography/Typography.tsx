import type { FC } from 'react';

import * as S from './Typography.styles';

export interface TypographyProps {
  className?: string;
  children: React.ReactNode;
  color?: 'lightGray' | 'mainBlack' | 'gray' | 'white';
  size?: 'regular' | 'medium' | 'bold' | 'black' | 'mediumBold';
}

export const Typography: FC<TypographyProps> = ({
  color,
  className,
  children,
  size = 'regular',
}) => {
  return (
    <S.Typography className={[color, size, className ?? ''].join(' ')}>
      {children}
    </S.Typography>
  );
};
