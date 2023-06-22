import { motion } from 'framer-motion';
import type { FC } from 'react';
import React, { useState } from 'react';
import { Tooltip } from 'react-tippy';

import { AnimatedTitle, Button } from '@/components';
import {
  variantsShowLeft,
  variantsShowRight,
} from '@/utils/animatedVariant.utils';
import { AppConfig } from '@/utils/AppConfig';

import {
  assetsValueTooltip,
  deductibleTooltip,
  renovationTooltip,
  selectItems,
  variants,
} from './data';
import type { TPeriod } from './parts';
import { RangeInput, Swicher } from './parts';
import * as S from './QuoteInsurance.styles';

export interface QuoteInsuranceProps {
  className?: string;
}

const getPremiumValue = (
  assetsValue: number | undefined,
  bilingPeriod: TPeriod,
  platformScore: number,
  coverageAmount: number
) => {
  if (!assetsValue) return 0;

  if (bilingPeriod === 'monthly') {
    // console.log('platformScore: ', platformScore);
    // console.log('coverageAmount: ', coverageAmount);
    // console.log('assetsValue: ', assetsValue);

    return (
      ((100 - Math.ceil(platformScore)) * 0.0002 + 0.00000000000000002) *
      (coverageAmount / 100) *
      assetsValue
    );
  }

  // return calculation for the "annual" period
  return (100 - platformScore) * 0.0019 * (coverageAmount / 100) * assetsValue;
};

export const QuoteInsurance: FC<QuoteInsuranceProps> = ({ className }) => {
  const [platformScore, setPlatformScore] = useState(
    selectItems[0]?.value as number
  );
  const [assetsValue, setAssetsValue] = useState('');
  const [coverageAmount, setCoverageAmount] = useState<number>(5);
  const [bilingPeriod, setBilingPeriod] = useState<TPeriod>('monthly');

  const premiumValue = getPremiumValue(
    Number(assetsValue),
    bilingPeriod,
    platformScore,
    coverageAmount
  );

  const handleChangeAssetsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(
    //   'setAssetsValue: ',
    //   e.currentTarget.value,
    //   parseInt(e.currentTarget.value.replace(/\D/g, ''), 10)
    // );

    setAssetsValue(e.currentTarget.value.replace(/\D/g, ''));
  };

  const handleSlectChange = (value: number) => {
    setPlatformScore(value);
  };

  const handleBilingPeriod = (value: TPeriod) => {
    setBilingPeriod(value);
  };
  const handleCoverageAmount = (value: number) => {
    setCoverageAmount(value);
  };

  return (
    <S.Root className={className}>
      <S.Wrapper>
        <S.AnimatedTitleWrapper
          initial="offscreenHeader"
          whileInView="onscreenHeader"
          viewport={{ once: true }}
          variants={variants}
        >
          <AnimatedTitle title="Quote your" underline="insurance" />
        </S.AnimatedTitleWrapper>

        <S.Form>
          <S.FormItem>
            <S.FormGroup
              className="w60"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={variantsShowLeft}
            >
              <S.InputGroup>
                <S.LabelInput color="mainBlack">
                  Select your platform:
                </S.LabelInput>
                <S.SelectStyled
                  label="Select"
                  values={selectItems}
                  onChange={handleSlectChange}
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.TooltipBox>
                  <S.LabelInput color="mainBlack">Value of assets</S.LabelInput>

                  <Tooltip {...assetsValueTooltip}>
                    <S.InfoIcon name="info" />
                  </Tooltip>
                </S.TooltipBox>
                <S.FormInput
                  type="text"
                  value={assetsValue}
                  onChange={handleChangeAssetsValue}
                />
              </S.InputGroup>
            </S.FormGroup>
            <S.FormGroup
              className="w40"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={variantsShowRight}
            >
              <S.InputGroup>
                <S.TooltipBox>
                  <S.LabelInput color="mainBlack">Renovation</S.LabelInput>

                  <Tooltip {...renovationTooltip}>
                    <S.InfoIcon name="info" />
                  </Tooltip>
                </S.TooltipBox>
                <Swicher
                  type="renovation"
                  onChangeBiling={handleBilingPeriod}
                />
              </S.InputGroup>
              <S.InputGroup>
                <S.TooltipBox>
                  <S.LabelInput color="mainBlack">Coverage amount</S.LabelInput>
                  <Tooltip {...deductibleTooltip}>
                    <S.InfoIcon name="info" />
                  </Tooltip>
                </S.TooltipBox>

                <RangeInput onChangeAmount={handleCoverageAmount} />
              </S.InputGroup>
            </S.FormGroup>
          </S.FormItem>

          <S.StyledDiveder />

          <S.FormItem className="isEndPos">
            <S.LabelInput>
              Total:{' '}
              <S.AmoutText>$ {premiumValue.toFixed(2) ?? 0} </S.AmoutText>
            </S.LabelInput>
            <motion.div
              initial="offscreenButton"
              whileInView="onscreenButton"
              viewport={{ once: true }}
              variants={variants}
            >
              <Button href={AppConfig.appLink}>Buy</Button>
            </motion.div>
          </S.FormItem>
        </S.Form>
      </S.Wrapper>
    </S.Root>
  );
};
