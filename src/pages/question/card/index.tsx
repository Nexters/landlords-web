import React, { SyntheticEvent } from 'react';

import * as S from './styled';

interface CardProps {
  uid: number;
  contents: string;
  onClick(e: SyntheticEvent): void;
}

export default function Card({ uid, contents, onClick }: CardProps) {
  return (
    <S.CardWrapper onClick={onClick} data-index={uid}>
      <S.CardContent>{contents}</S.CardContent>
    </S.CardWrapper>
  );
}
