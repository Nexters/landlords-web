import creatingImg from 'images/creating.png';
import React from 'react';

import * as S from './styled';

export default function Loading() {
  return (
    <S.Container>
      <img src={creatingImg}></img>
      <S.LoadingText>
        나만의 체크리스트 생성중
        <S.Dot />
      </S.LoadingText>
    </S.Container>
  );
}
