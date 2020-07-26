import React, { ChangeEvent, FocusEvent, ReactElement } from 'react';

import * as S from './styled';

interface CheckboxProps {
  name?: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Checkbox({
  checked,
  onChange = (): void => {},
  name,
  disabled = false,
  onBlur,
  className,
}: CheckboxProps): ReactElement {
  return (
    <S.Container className={className}>
      <S.StyledInput
        type='checkbox'
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />
    </S.Container>
  );
}
