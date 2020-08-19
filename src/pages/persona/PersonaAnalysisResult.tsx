import facebookShare from 'api/facebookShare';
import kakaoShare from 'api/kakaoShare';
import webShare from 'api/webShare';
import React, { ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import * as S from './styled';

enum TEXT {
  GO_CHECKLIST = '나만의 체크리스트 보러가기',
  RETEST = '자취유형 다시 진단하기',
}

export default function PersonaAnalysisResultPage(): ReactElement {
  const path = useLocation().pathname;
  const queryString = useLocation().search;
  const shareUrl = 'https://checkhaebang.web.app' + path + queryString;

  const urlParams = new URLSearchParams(queryString);

  const history = useHistory();
  const handleGoChecklistButtonClick = () => {
    history.push('/checklist');
  };
  const handleRetestButtonClick = () => {
    history.push('/persona');
  };
  return (
    <S.ResultContainer>
      <S.TitleWrapper>
        당신의 자취 유형은
        <S.UserPersona>{urlParams.get('title')}!</S.UserPersona>
      </S.TitleWrapper>
      <S.PersonaDescription>{urlParams.get('description')}</S.PersonaDescription>

      <S.ShareButtonDiv>
        <S.ShareButton onClick={() => facebookShare(shareUrl)} bgColor='#3b5a96'></S.ShareButton>
        <S.ShareButton onClick={() => kakaoShare(shareUrl)} bgColor='#fedc00'></S.ShareButton>
        <S.ShareButton
          onClick={() => webShare('title', shareUrl)}
          bgColor='#386edb'></S.ShareButton>
      </S.ShareButtonDiv>

      <S.GoChecklistButton onClick={handleGoChecklistButtonClick}>
        {TEXT.GO_CHECKLIST}
      </S.GoChecklistButton>
      <S.RetestButton onClick={handleRetestButtonClick}>{TEXT.RETEST}</S.RetestButton>
    </S.ResultContainer>
  );
}
