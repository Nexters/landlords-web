import React, { ReactElement, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styled';

type PersonaAnalysisPageProps = {};

enum TEXT {
  TITLE = '당신만을 위한\n자취방 체크리스트를\n만들어드릴게요!',
  DESCRIPTION = '방 구하기부터 이사까지,\n그 누구도 알려주지 않은 맞춤형 꿀팁',
  START = '자취 준비 시작',
  BACK = '아니요, 괜찮아요',
}

export default function PersonaAnalysisPage(_: PersonaAnalysisPageProps): ReactElement {
  const [viewerCount] = useState(0);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <S.Container>
      <S.Title>
        {TEXT.TITLE.split('\n').map((line) => {
          return (
            <span key={line}>
              {line}
              <br />
            </span>
          );
        })}
      </S.Title>
      <S.Description>
        {TEXT.DESCRIPTION.split('\n').map((line) => {
          return (
            <span key={line}>
              {line}
              <br />
            </span>
          );
        })}
      </S.Description>

      <S.CounterDescription>총 {viewerCount}명이 체크해방을 참고했습니다.</S.CounterDescription>

      <Link to='/persona/question'>
        <S.StartButton>{TEXT.START}</S.StartButton>
      </Link>
      <S.BackButton onClick={goBack}>{TEXT.BACK}</S.BackButton>
    </S.Container>
  );
}
