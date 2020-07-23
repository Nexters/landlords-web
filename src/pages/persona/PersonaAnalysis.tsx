import React, { ReactElement } from 'react';

import * as S from './styled';

type PersonaAnalysisPageProps = {};

enum TEXT {
  title = '당신만을 위한 자취방 체크리스트를 만들어드릴게요!',
  description = '방 구하기부터 이사까지, 그 누구도 알려주지 않은 맞춤형 꿀팁',
  start = '자취 준비 시작',
  back = '아니요, 괜찮아요',
}

export default function PersonaAnalysisPage(_: PersonaAnalysisPageProps): ReactElement {
  return (
    <S.Container>
      <S.Title>{TEXT.title}</S.Title>
      <S.Description>{TEXT.description}</S.Description>

      <S.CounterDescription>총 명이 체크해방을 참고했습니다.</S.CounterDescription>
      <S.StartButton>{TEXT.start}</S.StartButton>
      <S.BackButton>{TEXT.back}</S.BackButton>
    </S.Container>
  );
}
