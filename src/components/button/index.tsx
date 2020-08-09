import React from 'react';
import color from 'styles/color';

import * as S from './styled';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  bgColor?: string;
  borderColor?: string;
}

export default function Button({
  title,
  onClick,
  bgColor,
  borderColor,
}: ButtonProps) {
  return <S.Button onClick={onClick} bgColor={bgColor} borderColor={borderColor}>{title}</S.Button>;
}
