import type { Variants } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';

import { AnimatedTitle } from '@/components';
import { AppConfig } from '@/utils/AppConfig';

import * as S from './OurApproach.styles';

export interface OurApproachProps {
  className?: string;
}

export const OurApproach: FC<OurApproachProps> = ({ className }) => {
  const variantsLeft: Variants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  const variantsRight: Variants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <S.Root>
      <S.OurApproach className={className}>
        <S.Box
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variantsLeft}
        >
          <S.BackgroundLeft
            src="/assets/svg/jump-coin.svg"
            alt="Coin picture"
          />
          <AnimatedTitle title="Our" underline="approach" />
          <S.SubTitle className="mainBlackLight regular">
            truzt <i>insures</i> your assets stored in centralized crypto
            platforms
          </S.SubTitle>
          <S.DescriptionWrapper>
            <S.Divider />
            <S.Description className="mainBlackLight regular">
              This means that if your platform goes into bankruptcy, we give you
              your money back.
            </S.Description>
          </S.DescriptionWrapper>

          <S.ButtonStyled href={AppConfig.appLink}>
            Create Account
          </S.ButtonStyled>
        </S.Box>
        <S.Preview
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variantsRight}
        >
          <S.ImageFormContainer>
            <Image
              fill
              src="/assets/images/our-approach-1.png"
              alt="Calculator picture"
            />
          </S.ImageFormContainer>

          <S.FormImage>
            <Image
              alt="Calculator picture"
              src="/assets/images/our-approach-2.png"
              fill={true}
            />
          </S.FormImage>
          <S.CoinTop src="/assets/svg/coin12.svg" alt="Coin picture" />
          <S.CoinBottom src="/assets/svg/coin11.svg" alt="Coin picture" />
        </S.Preview>
      </S.OurApproach>
    </S.Root>
  );
};
