import cn from 'classnames';
import type { ElementType, FC, ReactNode } from 'react';

import * as S from './Button.styles';

export interface ButtonProps {
  href?: string;
  className?: string;
  children: ReactNode;
  hasArrow?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  as?: ElementType | undefined;
}

export const Button: FC<ButtonProps> = ({
  href,
  children,
  className,
  hasArrow = true,
  onClick = () => {},
  disabled,
  as,
}) => {
  const btnTmp = (
    <>
      <S.Text className={hasArrow ? 'hasArrow' : ''} as="span">
        {children}
      </S.Text>

      {hasArrow && <S.IconArrow name="arrow" />}
    </>
  );

  return href ? (
    <S.LinkStyled className={className} href={href} passHref>
      {btnTmp}
    </S.LinkStyled>
  ) : (
    <S.Button
      className={cn(className, { disabled })}
      onClick={onClick}
      disabled={disabled}
      as={as}
    >
      {btnTmp}
    </S.Button>
  );
};
