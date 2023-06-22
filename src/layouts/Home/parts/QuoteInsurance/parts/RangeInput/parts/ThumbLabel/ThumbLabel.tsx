import type { FC } from 'react';
import type { Range } from 'react-range';
import { useThumbOverlap } from 'react-range';

import * as S from './ThumbLabe.styles';

export interface ThumbLabelProps {
  className?: string;
  rangeRef: Range | null;
  values: number[];
  index: number;
}

export const ThumbLabel: FC<ThumbLabelProps> = ({
  className,
  rangeRef,
  values,
  index,
}) => {
  const [labelValue, style] = useThumbOverlap(rangeRef, values, index);
  return (
    <S.Root
      className={className}
      data-label={index}
      style={{
        ...(style as React.CSSProperties),
      }}
    >
      {(labelValue as string).split('.')[0]}%
    </S.Root>
  );
};
