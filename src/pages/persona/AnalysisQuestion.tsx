import React, { ReactElement } from 'react';
import * as S from './styled';

import Button from '../../components/button';
import Card from '../../components/card';

type AnalysisQuestionProps = {};

enum Text {
  title = 'Question?',
  
  cardTitle =  '핵인싸',
  cardSubTitle = '일주일에 4번 이상 약속있는',
  buttonValue = '다음'
}


export default function AnalysisQuestion({}: AnalysisQuestionProps): ReactElement {
  return (
    <S.Container>
      <S.backButton>back</S.backButton>

      <S.questionContainer>
        <S.qeustionTitle>{Text.title}</S.qeustionTitle>
        <S.questionCounter>1/10</S.questionCounter>
        <S.progress />
      </S.questionContainer>

      <S.cardContainer>
        <Card title={Text.cardTitle} subTitle={Text.cardSubTitle} />
        <Card title={Text.cardTitle} subTitle={Text.cardSubTitle} />
        <Card title={Text.cardTitle} subTitle={Text.cardSubTitle} />
        <Card title={Text.cardTitle} subTitle={Text.cardSubTitle} />
      </S.cardContainer>

      <Button name="next" value={Text.buttonValue} link="/persona/result" />
    </S.Container>
  );
}
