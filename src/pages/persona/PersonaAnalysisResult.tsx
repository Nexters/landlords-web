import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

enum TEXT {
  BUTTON_DESCRIPTION = '체크리스트로 더 현명하게 방을 구해보자!',
  GO_CHECKLIST = '나만의 체크리스트 보러가기',
  SHARE = '체크해방 공유하기',
}

export default function PersonaAnalysisResultPage(): ReactElement {
  const [userName] = useState('건물주');
  const [userPersona] = useState('꼼꼼한 집순이');
  const [PersonaDescription] = useState('설명 임시 데이터');

  return (
    <S.Container>
      <Link to='/checklist'>
        <S.CloseButton>X</S.CloseButton>
      </Link>

      <S.UserName>
        { userName }님은
        <br />
        { userPersona }!
      </S.UserName>
      <S.PersonaDescription>{ PersonaDescription }</S.PersonaDescription>
      <S.ButtonDescription>{ TEXT.BUTTON_DESCRIPTION }</S.ButtonDescription>
      <Link to='/checklist'>
        <S.StartButton>{ TEXT.GO_CHECKLIST }</S.StartButton>
      </Link>
      <S.ShareButton>{ TEXT.SHARE }</S.ShareButton>
    </S.Container>
  );
}
