import facebookShare from 'api/facebookShare';
import kakaoShare from 'api/kakaoShare';
import request from 'api/request';
import webShare from 'api/webShare';
import { Icon, Loading } from 'components';
import { Persona } from 'entity/persona';
import creatingImg from 'images/creating.png';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import PersonaMapper from './mapper';
import * as S from './styled';

enum TEXT {
  GO_CHECKLIST = '나만의 체크리스트 보러가기',
  RETEST = '자취유형 다시 진단하기',
}

export default function PersonaAnalysisResultPage(): ReactElement {
  const shareUrl = window.location.href;
  const queryString = useLocation().search;
  const [personaData, setPersonaData] = useState<Persona>({
    type: '',
    description: '',
    recommended_place: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAnswer = async () => {
      const params = new URLSearchParams(queryString).get('answer_id');
      const choices = params!.split(',');

      const reqParams = new URLSearchParams();
      choices.forEach((id: string) => {
        reqParams.append('choice_answers', id);
      });

      const res = await request.get<Persona>('/persona', { params: reqParams });
      const data = res.data;
      setPersonaData(data);
    };
    fetchAnswer();
  }, []);

  const descriptionParams: string = personaData.description;
  const description = descriptionParams.split('<hr>').map((line) => {
    if (line.includes('</hr>')) {
      const highlights = line.split('</hr>');
      const highlight = highlights[0];
      const nextHighlight = highlights[1];
      return (
        <>
          <S.Highlight key={highlight}>{highlight}</S.Highlight>
          {nextHighlight}
        </>
      );
    } else {
      return <span>{line}</span>;
    }
  });

  const history = useHistory();
  const handleGoChecklistButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      history.push('/auth');
    }, 3000);
  };
  const handleRetestButtonClick = () => {
    history.push('/persona');
  };
  return isLoading ? (
    <Loading image={creatingImg} text='나만의 체크리스트 생성중' />
  ) : (
    <S.ResultContainer>
      <S.TitleWrapper>
        당신의 자취 유형은
        <S.UserPersona>{personaData.type}!</S.UserPersona>
      </S.TitleWrapper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img style={{ width: 360, height: 210 }} src={PersonaMapper(personaData.type)}></img>
      </div>
      <S.RecommendedPlace>추천공간 : {personaData.recommended_place[0]}</S.RecommendedPlace>
      <S.PersonaDescription>{description}</S.PersonaDescription>

      <S.ShareButtonWrapper>
        <S.ShareButtons>
          <Icon name='FACEBOOK_BUTTON' size='42' onClick={() => facebookShare(shareUrl)} />
          <Icon name='KAKAOTALK_BUTTON' size='42' onClick={() => kakaoShare(shareUrl)} />
          <Icon name='URL_BUTTON' size='42' onClick={() => webShare('title', shareUrl)} />
        </S.ShareButtons>
      </S.ShareButtonWrapper>

      <S.GoChecklistButton onClick={handleGoChecklistButtonClick}>
        {TEXT.GO_CHECKLIST}
      </S.GoChecklistButton>
      <S.RetestButton onClick={handleRetestButtonClick}>{TEXT.RETEST}</S.RetestButton>
    </S.ResultContainer>
  );
}
