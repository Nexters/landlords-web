import React from 'react';

import * as S from './styled';

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  value: string;
  placeholder: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
}

export default function Input({
  onChange,
  value,
  placeholder,
  fontSize = '14px',
  fontWeight = 'bold',
  height = '43px',
}: InputProps) {

  return (
    <S.InputField 
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      fontSize={fontSize}
      fontWeight={fontWeight}
      height={height}
    />
  );
}
