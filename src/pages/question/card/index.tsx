import React from 'react';

import * as S from './styled';

interface CardProps {
  uid: number;
  contents: string;
  index: number;
  onClick: (index: number) => void;
}

export default function Card({ uid, contents, index, onClick }: CardProps) {
  return (
    <S.CardWrapper onClick={() => onClick(index)} data-index={uid}>
      <S.CardContent>{contents}</S.CardContent>
    </S.CardWrapper>
  );
}
