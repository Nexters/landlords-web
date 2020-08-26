import { Viewer } from 'entity/persona';
import { useFetch } from 'hooks';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styled';

enum TEXT {
  TITLE = '당신만을 위한\n자취방 체크리스트를\n만들어드릴게요!',
  DESCRIPTION = '방 구하기부터 이사까지,\n그 누구도 알려주지 않은 맞춤형 꿀팁',
  START = '자취 준비 시작',
  BACK = '아니요, 다음에 할게요!',
}

export default function PersonaAnalysisPage(): ReactElement {
  const { data } = useFetch<Viewer>('/persona/count');
  const countWithComma = data ? data.count.toLocaleString() : '0';

  const sortedTitle = TEXT.TITLE.split('\n').map((line) => {
    return (
      <span key={line}>
        {line}
        <br />
      </span>
    );
  });

  const sortedDesc = TEXT.DESCRIPTION.split('\n').map((line) => {
    return (
      <span key={line}>
        {line}
        <br />
      </span>
    );
  });

  const history = useHistory();
  const handleStartButtonClick = () => {
    history.push('/persona/question');
  };
  const handleBackButtonClick = () => {
    history.push('/auth');
  };

  return (
    <S.Container>
      <S.Title>{sortedTitle}</S.Title>
      <S.Description> {sortedDesc}</S.Description>

      <S.CounterDescription>
        총 <S.Count>{countWithComma}</S.Count>명이 체크해방을 참고했습니다.
      </S.CounterDescription>

      <S.StartButton onClick={handleStartButtonClick}>{TEXT.START}</S.StartButton>
      <S.BackButton onClick={handleBackButtonClick}>{TEXT.BACK}</S.BackButton>
    </S.Container>
  );
}
