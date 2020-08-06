import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

enum TEXT {
  GO_CHECKLIST = '나만의 체크리스트 보러가기',
  RETEST = '자취유형 다시 진단하기',
}

export default function PersonaAnalysisResultPage(): ReactElement {
  const userPersona = '꼼꼼한 집순이';
  const PersonaDescription = '설명 임시 데이터';

  return (
    <S.ResultContainer>
      <S.TitleDiv>
        당신의 자취 유형은
        <S.UserPersona>{userPersona}!</S.UserPersona>
      </S.TitleDiv>
      <S.PersonaDescription>{PersonaDescription}</S.PersonaDescription>

      <S.ShareButtonDiv>
        <S.ShareButton>페북</S.ShareButton>
        <S.ShareButton>카카오</S.ShareButton>
        <S.ShareButton>url</S.ShareButton>
      </S.ShareButtonDiv>

      <Link to='/checklist'>
        <S.GoChecklistButton>{TEXT.GO_CHECKLIST}</S.GoChecklistButton>
      </Link>

      <S.RetestButton>
        <Link to='/persona'>{TEXT.RETEST}</Link>
      </S.RetestButton>
    </S.ResultContainer>
  );
}
