import type { FC } from 'react';

import * as S from './Home.styles';
import {
  Faq,
  GetInToch,
  Hero,
  HowItWorks,
  OurApproach,
  QuoteInsurance,
  ReasonForIncurance,
  WeInsureYourAssets,
} from './parts';

export const Home: FC = () => {
  return (
    <S.Root>
      <Hero />
      <ReasonForIncurance />
      <OurApproach />
      <HowItWorks />
      <WeInsureYourAssets />
      <QuoteInsurance />
      <Faq />
      <GetInToch />
    </S.Root>
  );
};
