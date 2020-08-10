import { Input } from 'components';
import React from 'react';

import * as S from './styled';

interface InputRowProps {
  name?: string;
  label: string;
  placeholder: string;
  suffix?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputRow({
  name = '',  
  label,
  placeholder,
  suffix,
  onChange,
  value = '',
}: InputRowProps) {
  return (
    <S.Row>
      <S.Label>{label}</S.Label>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        height='32px'
        fontSize='14px'
        fontWeight='normal'
      />
      {suffix && <S.Suffix>{suffix}</S.Suffix>}
    </S.Row>
  );
}
