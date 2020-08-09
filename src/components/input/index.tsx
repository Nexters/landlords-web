import React from 'react';

import * as S from './styled';

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  value: string;
  placeholder: string;
}

export default function Input({
  onChange,
  value,
  placeholder,
}: InputProps) {

  return (
    <S.InputField 
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
