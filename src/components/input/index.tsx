import React from 'react';

import * as S from './styled';

interface InputProps {
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  value: string;
  placeholder: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  type?:string;
}

export default function Input({
  name = '',
  onChange,
  value,
  placeholder,
  fontSize = '14px',
  fontWeight = 'bold',
  height = '43px',
  type = 'text',
}: InputProps) {

  return (
    <S.InputField
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      fontSize={fontSize}
      fontWeight={fontWeight}
      height={height}
    />
  );
}
