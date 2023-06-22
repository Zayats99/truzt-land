import cn from 'classnames';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { getTrackBackground, Range } from 'react-range';

import { ThumbLabel } from './parts';
import * as S from './RangeInput.styles';

interface RangeInputProps {
  className?: string;
  onChangeAmount: (value: number) => void;
}
const STEP = 1;
const MIN = 50;
const MAX = 150;

export const RangeInput: FC<RangeInputProps> = ({
  className,
  onChangeAmount,
}) => {
  const [value, setValue] = useState([100]);
  const rangeRef: any = useRef<Range>();

  const handleChangeValues = (num: number[]) => {
    setValue(num);
    onChangeAmount(num[0] as number);
  };
  return (
    <S.Root className={className}>
      <Range
        ref={rangeRef}
        values={value}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => handleChangeValues(values)}
        renderTrack={({ props, children }) => (
          <S.RangeTrackWrapper
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
          >
            <S.RangeTrack
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: value,
                  colors: ['#0F4BA6', '#eceff9'],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </S.RangeTrack>
          </S.RangeTrackWrapper>
        )}
        renderThumb={({ props, index, isDragged }) => (
          <S.RangeThumb {...props}>
            <ThumbLabel
              rangeRef={rangeRef.current}
              values={value}
              index={index}
            />
            <S.Thumb className={cn({ isDragged })} />
          </S.RangeThumb>
        )}
      />
    </S.Root>
  );
};
