import React from 'react';

import * as S from './styled';

interface CardProps {
  uid: number;
  contents: string;
  onClick: () => void;
}

export default function Card({ contents, onClick }: CardProps) {
  return (
    <S.CardWrapper onClick={onClick}>
      <S.CardContent>{contents}</S.CardContent>
    </S.CardWrapper>
  );
}
