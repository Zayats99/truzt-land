import type { FC } from 'react';

import * as S from './InputOutline.styles';

export interface InputOutlineProps {
  className?: string;
  value?: string | number;
  onChange?: (e: any) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email';
  pattern?: string;
}

export const InputOutline: FC<InputOutlineProps> = (props) => {
  return <S.InputText {...props} />;
};
