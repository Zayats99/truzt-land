import { motion } from 'framer-motion';
import Image from 'next/image';

import { SliderSwiper } from '@/components';
import {
  variantsShowLeft,
  variantsShowRight,
  variantsTitle,
} from '@/utils/animatedVariant.utils';

import * as S from './WeInsureYourAssets.styles';

export const WeInsureYourAssets = () => {
  return (
    <S.Root>
      <S.Box>
        <S.ArrowRight
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variantsShowRight}
        >
          <Image alt="Arrow" fill src="/assets/svg/slider-arrow-right.svg" />
        </S.ArrowRight>
        <motion.div
          initial="offscreenHeader"
          whileInView="onscreenHeader"
          viewport={{ once: true }}
          variants={variantsTitle}
        >
          <S.Paragraph size="bold" color="mainBlack">
            We insure your assets at the most relevant exchanges in the world
          </S.Paragraph>
        </motion.div>

        <S.ArrowLeft
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variantsShowLeft}
        >
          <Image alt="Arrow" fill src="/assets/svg/slider-arrow-left.svg" />
        </S.ArrowLeft>
      </S.Box>

      <S.Box>
        <SliderSwiper />
      </S.Box>
    </S.Root>
  );
};
