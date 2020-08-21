import analyzingImg from 'images/analyzing.png';
import React from 'react';

import * as S from './styled';

export default function Loading() {
  return (
    <S.Container>
      <img src={analyzingImg}></img>
      <S.LoadingText>
        나의 자취 유형 분석중
        <S.Dot />
      </S.LoadingText>
    </S.Container>
  );
}
