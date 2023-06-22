import cn from 'classnames';
import type { FC } from 'react';

import * as S from './AnimatedTitle.styles';

export interface AnimatedTitleProps {
  title?: string;
  underline?: string;
  className?: string;
  children?: React.ReactNode;
  tag?: 'h1' | 'h2';
}

export const AnimatedTitle: FC<AnimatedTitleProps> = ({
  title,
  underline,
  className,
  children,
  tag = 'h2',
}) => {
  const HeadingStyled = tag === 'h1' ? S.Heading1 : S.Heading2;

  return (
    <S.AnimatedWrapper
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
    >
      {title ? (
        <HeadingStyled className={cn({ isH1: tag === 'h1' })}>
          {title}
          {underline && ' '}
          {underline && (
            <S.Underline>
              {underline}
              <S.AnimatedLineStyled />
            </S.Underline>
          )}
        </HeadingStyled>
      ) : (
        children
      )}
    </S.AnimatedWrapper>
  );
};
