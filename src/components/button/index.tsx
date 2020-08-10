import React from 'react';
import color from 'styles/color';

import * as S from './styled';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  bgColor?: string;
  borderColor?: string;
  fontSize?: string;
  height?: string;
  textColor?: string;
  fontWeight?: string;
}

export default function Button({
  title,
  onClick,
  bgColor,
  borderColor,
  fontSize = '16px',
  height = '54px',
  textColor = color.grayscale29,
  fontWeight = 'bold',
}: ButtonProps) {
  return (
    <S.Button
      onClick={onClick}
      bgColor={bgColor}
      borderColor={borderColor}
      fontSize={fontSize}
      height={height}
      color={textColor}
      fontWeight={fontWeight}
    >
      {title}
    </S.Button>
  );
}
