import type { FC } from 'react';
import { useState } from 'react';

import * as S from './Swicher.styles';

export type TPeriod = 'monthly' | 'annual';

export interface SwicherProps {
  type: 'renovation' | 'deductible';
  onChangeBiling?: (value: TPeriod) => void;
  onChangeAmount?: (value: number) => void;
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

type Position = 'left' | 'center' | 'right';

const periodMap = new Map<string, TPeriod>([
  ['left', 'monthly'],
  ['right', 'annual'],
]);
const coverageValueMap = new Map<string, number>([
  ['left', 5],
  ['center', 10],
  ['right', 15],
]);

export const Swicher: FC<SwicherProps> = ({
  type,
  onChangeAmount,
  onChangeBiling,
}) => {
  const [position, setPosition] = useState<Position>('left');

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value as Position);
    if (type === 'renovation' && onChangeBiling) {
      const period = periodMap.get(e.target.value) ?? 'monthly';
      onChangeBiling(period);
    } else if (onChangeAmount) {
      const value = coverageValueMap.get(e.target.value) ?? 5;
      onChangeAmount(value);
    }
  };

  const toUpperCaseFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <S.Root className={`is${toUpperCaseFirstLetter(position)}`}>
      <S.AnimatedBlock
        layout
        transition={spring}
        className={`is${toUpperCaseFirstLetter(type)}`}
      />
      <S.RadioInput
        defaultChecked
        onChange={handleChangeValue}
        name="map-switch"
        id={`left-${type}`}
        type="radio"
        value="left"
      />
      <S.LabelInput
        className={`left ${
          position === 'left' ? 'active' : 'notActive'
        } is${toUpperCaseFirstLetter(type)}`}
        htmlFor={`left-${type}`}
      >
        {type === 'renovation' ? 'Monthly' : '5%'}
      </S.LabelInput>
      {type === 'deductible' && (
        <>
          <S.RadioInput
            onChange={handleChangeValue}
            name="map-switch"
            id="center"
            type="radio"
            value="center"
          />
          <S.LabelInput
            className={`center ${
              position === 'center' ? 'active' : 'notActive'
            } is${toUpperCaseFirstLetter(type)}`}
            htmlFor="center"
          >
            10%
          </S.LabelInput>
        </>
      )}

      <S.RadioInput
        onChange={handleChangeValue}
        name="map-switch"
        id={`right-${type}`}
        type="radio"
        value="right"
      />
      <S.LabelInput
        className={`right ${
          position === 'right' ? 'active' : 'notActive'
        } is${toUpperCaseFirstLetter(type)}`}
        htmlFor={`right-${type}`}
      >
        {type === 'renovation' ? 'Annual' : '15%'}
      </S.LabelInput>
    </S.Root>
  );
};
