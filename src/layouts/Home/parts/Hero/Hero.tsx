import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import { AnimatedTitle } from '@/components';
import { AppConfig } from '@/utils/AppConfig';

import * as S from './Hero.styles';

export interface HeroProps {
  className?: string;
}

export const Hero: FC<HeroProps> = ({ className }) => {
  const variants: Variants = {
    offscreenHeader: {
      opacity: 0,
    },
    onscreenHeader: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    offscreenSubtitle: {
      opacity: 0,
    },
    onscreenSubtitle: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.7,
      },
    },
    offscreenButton: {
      opacity: 0,
    },
    onscreenButton: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 1.3,
      },
    },
  };

  return (
    <S.Root className={className}>
      <S.HeroBannerStyled />
      <S.Content>
        <S.AnimatedTitleWrapper
          initial="offscreenHeader"
          whileInView="onscreenHeader"
          viewport={{ once: true }}
          variants={variants}
        >
          <AnimatedTitle
            tag="h1"
            title="Crypto deposit"
            underline="insurance"
          ></AnimatedTitle>
        </S.AnimatedTitleWrapper>

        <motion.div
          initial="offscreenSubtitle"
          whileInView="onscreenSubtitle"
          viewport={{ once: true }}
          variants={variants}
        >
          <S.Subtitle>
            Truzt brings never-seen-before deposit insurance to the crypto
            ecosystem
          </S.Subtitle>
        </motion.div>

        <motion.div
          initial="offscreenButton"
          whileInView="onscreenButton"
          viewport={{ once: true }}
          variants={variants}
        >
          <S.StartedButton hasArrow={false} href={AppConfig.appLink}>
            Get started
          </S.StartedButton>
        </motion.div>
      </S.Content>
    </S.Root>
  );
};
