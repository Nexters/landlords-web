import Card from 'components/card';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import questions from './questions';
import * as S from './styled';

export default function PersonaQuestionPage(): ReactElement {
  const history = useHistory();

  const [questionNum, setQuestionNum] = useState(1);
  const [quesitonLen] = useState(questions.length);
  const [question, setQuestion] = useState(questions[0]);

  useEffect(() => {
    questionNum > quesitonLen ? history.push('/persona/result') : '';
    setQuestion(questions[questionNum - 1]);
  }, [questionNum]);

  const handleCardClick = () => {
    setQuestionNum(questionNum + 1);
  };

  const getCard = question['choice'].map((item: any) => {
    return (
      <div key='card'>
        <Card uid={item.id} contents={item.contents} onClick={handleCardClick}></Card>
      </div>
    );
  });

  return (
    <S.Container>
      <S.BackButton>-</S.BackButton>

      <S.QuestionID>
        {questionNum}/{quesitonLen}
      </S.QuestionID>
      <S.Title>{question ? question['title'] : ''}</S.Title>

      <S.CardDiv>{question ? getCard : ''}</S.CardDiv>

      <S.ProgressDiv></S.ProgressDiv>
    </S.Container>
  );
}
