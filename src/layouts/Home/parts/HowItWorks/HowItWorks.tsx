import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';

import { AnimatedTitle } from '@/components';
import { variantsTitle } from '@/utils/animatedVariant.utils';

import * as S from './HowItWorks.styles';

export interface HowItWorksProps {
  className?: string;
}

const sideVariants = (delay = 0) => ({
  x: 0,
  y: 0,
  opacity: 1,
  transition: {
    type: 'spring',
    bounce: 0.4,
    duration: 0.8,
    delay,
  },
});

export const showLeft: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: sideVariants(0.5),
};

export const showCenter: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: sideVariants(),
};

export const showRight: Variants = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: sideVariants(0.5),
};

export const HowItWorks: FC<HowItWorksProps> = ({ className }) => {
  return (
    <S.Root>
      <S.HowItWorks className={className}>
        <motion.div
          initial="offscreenHeader"
          whileInView="onscreenHeader"
          viewport={{ once: true }}
          variants={variantsTitle}
        >
          <AnimatedTitle title="How" underline="it works" />
        </motion.div>
        <S.ListWrapper>
          <S.ListItem
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={showLeft}
          >
            <S.ItemNumberWrapper>
              <S.ItemNumber
                src="/assets/svg/how-it-works-num-1.svg"
                alt="Picture number 1"
              />
            </S.ItemNumberWrapper>
            <S.ImgWrapper>
              <Image
                fill
                alt="Quote firl with pen"
                src="/assets/svg/how-it-works-1.svg"
              />
            </S.ImgWrapper>

            <S.ItemHeader>Quote</S.ItemHeader>
            <S.ItemDescription className="mainBlackLight regular">
              Select your platform and the amount to insure, you’ll see your
              premium in seconds
            </S.ItemDescription>
          </S.ListItem>

          <S.ListItem
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={showCenter}
          >
            <S.ItemNumberWrapper>
              <S.ItemNumber
                src="/assets/svg/how-it-works-num-2.svg"
                alt="Picture number 2"
              />
            </S.ItemNumberWrapper>

            <S.ImgWrapper>
              <Image
                fill
                alt="Buy, girl with laptop"
                src="/assets/svg/how-it-works-2.svg"
              />
            </S.ImgWrapper>
            <S.ItemHeader>Buy</S.ItemHeader>
            <S.ItemDescription className="mainBlackLight regular">
              Pay for your insurance with crypto or card
            </S.ItemDescription>
          </S.ListItem>

          <S.ListItem
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={showRight}
          >
            <S.ItemNumberWrapper>
              <S.ItemNumber
                src="/assets/svg/how-it-works-num-3.svg"
                alt="Picture number 3"
              />
            </S.ItemNumberWrapper>

            <S.ImgWrapper>
              <Image
                fill
                alt="Claim, dancing people"
                src="/assets/svg/how-it-works-3.svg"
              />
            </S.ImgWrapper>
            <S.ItemHeader>Claim</S.ItemHeader>
            <S.ItemDescription className="mainBlackLight regular">
              If your platform fails claim your insurance to get back your
              assets
            </S.ItemDescription>
          </S.ListItem>
        </S.ListWrapper>
      </S.HowItWorks>
    </S.Root>
  );
};
