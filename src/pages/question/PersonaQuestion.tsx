import Card from 'components/card';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import questions from './questions';
import * as S from './styled';

export default function PersonaQuestionPage(): ReactElement {
  const history = useHistory();

  const [questionNum, setQuestionNum] = useState(1);
  const [quesitonLen] = useState(questions.length);

  useEffect(() => {
    questionNum >= quesitonLen ? history.push('/persona/result') : '';
  }, [questionNum]);

  const handleCardClick = () => {
    setQuestionNum(questionNum + 1);
  };

  return (
    <S.Container>
      <S.BackButton>-</S.BackButton>

      <S.QuestionID>
        {questionNum}/{quesitonLen}
      </S.QuestionID>
      <S.Title>title</S.Title>

      <S.CardDiv>
        <Card uid={1} contents='남자' onClick={handleCardClick}></Card>
        <Card uid={1} contents='남자' onClick={handleCardClick}></Card>
        <Card uid={1} contents='남자' onClick={handleCardClick}></Card>
        <Card uid={1} contents='남자' onClick={handleCardClick}></Card>
      </S.CardDiv>

      <S.ProgressDiv></S.ProgressDiv>
    </S.Container>
  );
}
