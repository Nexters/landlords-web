import React, { ReactElement } from 'react';
import * as S from './styled';

type CardProps = {
    title: string;
    subTitle: string;
};

export default function Card({ title, subTitle }: CardProps): ReactElement {
  return (
    <S.Container>
      <S.subTitle>{subTitle}</S.subTitle>
      <S.title>{title}</S.title>
    </S.Container>
  );
}
