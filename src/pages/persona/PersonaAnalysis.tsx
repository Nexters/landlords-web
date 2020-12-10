import { Viewer } from 'entity/persona';
import { useFetch } from 'hooks';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { startIllust } from '../../assets';
import * as S from './styled';

enum TEXT {
  TITLE = '당신의 성향 기반으로\n1:1 자취방 체크리스트를\n만들어 드릴게요!',
  DESCRIPTION = '방 구하기부터 이사까지,\n그 누구도 알려주지 않은 맞춤형 꿀팁',
  START = '자취 유형 테스트 시작',
  BACK = '이미 나만의 체크리스트가 있어요!',
}

export default function PersonaAnalysisPage(): ReactElement {
  // const { data } = useFetch<Viewer>('/persona/count');
  // const countWithComma = data ? data.count?.toLocaleString() : '0';

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
      <img style={{ height: 226, objectFit: 'contain' }} src={startIllust} alt='startIllust' />
      <S.CounterDescription>
        총 <S.Count>1000</S.Count>명이 체크해방을 참고해 방을 구했어요!
      </S.CounterDescription>

      <S.StartButton onClick={handleStartButtonClick}>{TEXT.START}</S.StartButton>
      <S.BackButton onClick={handleBackButtonClick}>{TEXT.BACK}</S.BackButton>
    </S.Container>
  );
}
