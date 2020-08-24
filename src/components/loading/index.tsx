import React from 'react';

import * as S from './styled';

interface LoadingProps {
  image: string;
  text: string;
}
export default function Loading({ image, text }: LoadingProps) {
  return (
    <S.Container>
      <img src={image}></img>
      <S.LoadingText>{text}...</S.LoadingText>
    </S.Container>
  );
}
