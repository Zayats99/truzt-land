import type { Variants } from 'framer-motion';
import type { FC } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import * as S from './Header.styles';

export const Header: FC = () => {
  const variants: Variants = {
    offscreen: {
      y: -30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 1.8,
      },
    },
  };

  return (
    <S.Header
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={variants}
    >
      <S.Logo
        src="/assets/svg/logo.svg"
        width={100}
        height={33}
        alt="logo"
        unselectable="on"
      />
      <S.ButtonStyled href={AppConfig.appLink}>Buy</S.ButtonStyled>
    </S.Header>
  );
};
