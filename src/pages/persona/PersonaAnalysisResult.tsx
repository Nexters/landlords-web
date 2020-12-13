import facebookShare from 'api/facebookShare';
import kakaoShare from 'api/kakaoShare';
import request from 'api/request';
import webShare from 'api/webShare';
import { Icon, Loading } from 'components';
import { Persona } from 'entity/persona';
import React, { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useLocation } from 'react-router-dom';
import color from 'styles/color';
import { ContainerWrapper } from 'styles/styled';

import creating from '../../assets/creating';
import PersonaMapper from './mapper';
import * as S from './styled';

type ThumbnailProps = {
  persona: string;
  recommend: string;
  persona_img: string;
};

function Thumbnail({ persona, recommend, persona_img }: ThumbnailProps): ReactElement {
  return (
    <Helmet
      title={`당신의 자취 유형은 ${persona}!`}
      meta={[
        {
          property: 'og:title',
          content: `당신의 자취 유형은 ${persona}!`,
        },
        {
          property: 'og:description',
          content: `추천공간 : ${recommend}`,
        },
        {
          property: 'og:image:url',
          content: `https://checkhaebang.netlify.app${persona_img}`,
        },
        {
          property: 'og:image:secure_url',
          content: `https://checkhaebang.netlify.app${persona_img}`,
        },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '360' },
        { property: 'og:image:height', content: '210' },
      ]}
    />
  );
}

enum TEXT {
  GO_CHECKLIST = '나만의 체크리스트 보러가기',
  RETEST = '유형 진단 다시하기',
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
      if (params) {
        const choices = params!.split(',');

        const reqParams = new URLSearchParams();
        choices.forEach((id: string) => {
          reqParams.append('choice_answers', id);
        });

        const res = await request.get<Persona>('/persona', { params: reqParams });
        const data = res.data;
        setPersonaData(data);
      }
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

  const { type, recommended_place } = personaData;
  return isLoading ? (
    <Loading width={280} height={200} image={creating} text='나만의 체크리스트 생성중' />
  ) : (
    <ContainerWrapper bgColor={color.grayscalef9}>
      <S.Container>
        <Thumbnail
          persona={type}
          recommend={recommended_place[0]}
          persona_img={PersonaMapper(type)}
        />
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
      </S.Container>
    </ContainerWrapper>
  );
}
