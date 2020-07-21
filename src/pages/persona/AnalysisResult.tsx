import React, { ReactElement } from 'react';
import * as S from './styled';

import Button from '../../components/button';

type AnalysisResultProps = {};

enum Text {
  title = '예희님은 꼼꼼한 집순이!',
  explanation =  '설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.',
  buttonExplanation = '체크리스트로 더 현명하게 방을 구해보자!',
  buttonValue = '나만의 체크리스트 보러가기'
}

export default function AnalysisResult({ }: AnalysisResultProps): ReactElement {
  return (
    <S.Container>
      <S.endButton>X</S.endButton>
      <S.personaTitle>{Text.title}</S.personaTitle>
      <S.explanation>{Text.explanation}</S.explanation>
      <S.buttonExplanation>{Text.buttonExplanation}</S.buttonExplanation>

      <Button name='result' value={Text.buttonValue} link='/checklist' />
    </S.Container>
  );
}
