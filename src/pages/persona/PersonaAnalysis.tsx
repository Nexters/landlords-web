import request from 'api/request';
import { Viewer } from 'entity/persona';
import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

enum TEXT {
  TITLE = '당신만을 위한\n자취방 체크리스트를\n만들어드릴게요!',
  DESCRIPTION = '방 구하기부터 이사까지,\n그 누구도 알려주지 않은 맞춤형 꿀팁',
  START = '자취 준비 시작',
  BACK = '아니요, 다음에 할게요!',
}

export default function PersonaAnalysisPage(): ReactElement {
  const [viewerCount, setViewerCount] = useState<string>('');

  const fetchViewer = async () => {
    const res = await request.get<Viewer>('/persona/count');
    const countWithComma = res.data.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setViewerCount(countWithComma);
  };

  useEffect(() => {
    fetchViewer();
  }, []);

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

  return (
    <S.Container>
      <S.Title>{sortedTitle}</S.Title>
      <S.Description> {sortedDesc}</S.Description>

      <S.CounterDescription>
        총 <S.Count>{viewerCount}</S.Count>명이 체크해방을 참고했습니다.
      </S.CounterDescription>

      <Link to='/persona/question'>
        <S.StartButton>{TEXT.START}</S.StartButton>
      </Link>
      <Link to='/auth'>
        <S.BackButton>{TEXT.BACK}</S.BackButton>
      </Link>
    </S.Container>
  );
}
