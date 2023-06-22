import cn from 'classnames';
import type { FC } from 'react';
import { useState } from 'react';

import type { TPlatformScore } from '../../data';
import * as S from './Select.styles';

export interface SelectProps {
  label: string;
  values: TPlatformScore[];
  name?: string;
  onChange: (value: number) => void;
  className?: string;
}

export const Select: FC<SelectProps> = ({
  label,
  values,
  onChange,
  name,
  className,
}) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleValueChange = (value: string) => {
    setCurrentValue(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleValueChange(e.currentTarget.value);

    if (onChange) onChange(Number(e.currentTarget.value));
  };

  return (
    <S.SelectContainer
      className={cn('switcher', className)}
      value={currentValue}
      name={name}
      onChange={handleChange}
    >
      <option value="none" disabled hidden>
        {label}
      </option>
      {values.map(({ title, value }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </S.SelectContainer>
  );
};
