import React, { ReactElement } from 'react';
import * as S from './styled';

import Button from '../../components/button';

type PersonaAnalysisPageProps = {};

enum Text {
  title = '당신만을 위한 자취방 체크리스트를 만들어드릴게요!',
  secondTitle =  '방 구하기부터 이사까지, 그누구도 알려주지 않은 맞춤형 꿀팁',
  buttonExplanation = '총 10,000명이 체크해방을 참고했습니다.',
  buttonValue = '자취 준비 시작'
}

export default function PersonaAnalysisPage({ }: PersonaAnalysisPageProps) : ReactElement {
  return (
    <S.Container>
      <S.title>{Text.title}</S.title>
      <S.secondTitle>{Text.secondTitle}</S.secondTitle>
      <S.buttonExplanation>{Text.buttonExplanation}</S.buttonExplanation>

      <Button name='start' value={Text.buttonValue} link='/persona/question' />
    </S.Container>
  );
}
