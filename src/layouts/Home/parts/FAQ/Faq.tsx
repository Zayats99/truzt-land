import Image from 'next/image';
import type { FC } from 'react';

import { AnimatedTitle } from '@/components';
import { FaqList } from '@/layouts/Home/parts/FAQ/parts/FaqList/FaqList';
import {
  variantsShowLeft,
  variantsShowRight,
  variantsTitle,
} from '@/utils/animatedVariant.utils';

import * as S from './Faq.styles';

export interface FaqProps {
  className?: string;
}

export const Faq: FC<FaqProps> = ({ className }) => {
  return (
    <S.Root className={className}>
      <S.Wrapper>
        <S.Box
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variantsShowLeft}
        >
          <S.Picture>
            <Image alt="Picture" fill src="/assets/svg/faq-picture.svg" />
          </S.Picture>
        </S.Box>
        <S.Box>
          <S.AnimatedHeader
            initial="offscreenHeader"
            whileInView="onscreenHeader"
            viewport={{ once: true }}
            variants={variantsTitle}
          >
            <AnimatedTitle title=" " underline="FAQ" />
          </S.AnimatedHeader>
          <S.Content
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={variantsShowRight}
          >
            <FaqList />
          </S.Content>
          <S.QuestionPicture>
            <Image
              fill
              alt="Questions mark"
              src="/assets/svg/question-mark.svg"
            />
          </S.QuestionPicture>
        </S.Box>
      </S.Wrapper>
    </S.Root>
  );
};
