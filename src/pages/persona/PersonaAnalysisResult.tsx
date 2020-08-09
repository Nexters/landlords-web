import facebookShare from 'api/facebookShare';
import kakaoShare from 'api/kakaoShare';
import request from 'api/request';
import { Persona } from 'entity/persona';
import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

enum TEXT {
  GO_CHECKLIST = '나만의 체크리스트 보러가기',
  RETEST = '자취유형 다시 진단하기',
}

export default function PersonaAnalysisResultPage(): ReactElement {
  const [persona, setPersona] = useState<Persona>();
  const PersonaDescription = '설명 임시 데이터';
  const fetchPersona = async () => {
    const data = await request.get<Persona>('/persona');
    setPersona(data);
  };

  useEffect(() => {
    fetchPersona();
  }, []);

  return (
    <S.ResultContainer>
      <S.TitleDiv>
        당신의 자취 유형은
        <S.UserPersona>{persona ? persona.title : ''}!</S.UserPersona>
      </S.TitleDiv>
      <S.PersonaDescription>{persona ? persona.description : ''}</S.PersonaDescription>

      <S.ShareButtonDiv>
        <S.ShareButton onClick={facebookShare}>페북</S.ShareButton>
        <S.ShareButton onClick={kakaoShare}>카카오</S.ShareButton>
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
