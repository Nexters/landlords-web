import React, { ReactElement } from 'react';

import * as S from './styled';

export default function PersonaQuestionPage(): ReactElement {
  return (
    <S.Container>
      <S.BackButton>-</S.BackButton>

      <S.QuestionID>question_id</S.QuestionID>
      <S.Title>title</S.Title>

      <S.CardDiv>card</S.CardDiv>

      <S.ProgressDiv></S.ProgressDiv>
    </S.Container>
  );
}
