import React from 'react';

import * as S from './styled';

export default function Loading() {
  return (
    <S.Container>
      <S.LoadingText>나만의 자취방 체크리스트 생성중...</S.LoadingText>
    </S.Container>
  );
}
