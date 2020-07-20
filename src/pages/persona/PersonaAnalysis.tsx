import React, { ReactElement } from 'react';
import * as S from './styled';

import Button from '../../components/Button';

type PersonaAnalysisPageProps = {};

export default function PersonaAnalysisPage({ }: PersonaAnalysisPageProps): ReactElement {
  return (
    <S.Container>
      <S.title>
        당신만을 위한<br />
        자취방 체크리스트를<br />
        만들어드릴게요!
      </S.title>
      <S.secondTitle>
        방 구하기부터 이사까지,<br />
        그누구도 알려주지 않은 맞춤형 꿀팁
      </S.secondTitle>

      <S.buttonExplanation>총 10,000명이 체크해방을 참고했습니다.</S.buttonExplanation>

      <Button name='start' value='자취 준비 시작' link='/persona/question' />
    </S.Container>
  );
}
