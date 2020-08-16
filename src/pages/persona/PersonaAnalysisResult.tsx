import facebookShare from 'api/facebookShare';
import kakaoShare from 'api/kakaoShare';
import webShare from 'api/webShare';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

enum TEXT {
  GO_CHECKLIST = '나만의 체크리스트 보러가기',
  RETEST = '자취유형 다시 진단하기',
}

export default function PersonaAnalysisResultPage(): ReactElement {
  const shareUrl = 'https://checkhaebang.web.app/';
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return (
    <S.ResultContainer>
      <S.TitleWrapper>
        당신의 자취 유형은
        <S.UserPersona>{urlParams.get('title')}!</S.UserPersona>
      </S.TitleWrapper>
      <S.PersonaDescription>{urlParams.get('description')}</S.PersonaDescription>

      <S.ShareButtonDiv>
        <S.ShareButton onClick={() => facebookShare(shareUrl)}>페북</S.ShareButton>
        <S.ShareButton onClick={() => kakaoShare(shareUrl)}>카카오</S.ShareButton>
        <S.ShareButton onClick={() => webShare('title', shareUrl)}>url</S.ShareButton>
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
