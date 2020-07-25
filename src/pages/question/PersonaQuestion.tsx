import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from './card';
import questions from './questions';
import * as S from './styled';

interface choiceProvider {
  id: number;
  contents: string;
}

export default function PersonaQuestionPage(): ReactElement {
  const history = useHistory();
  const [currentIdx, setCurrentIdx] = useState(0);
  const quesitonLen = questions.length;
  const { title, choice } = currentIdx < quesitonLen ? questions[currentIdx] : questions[0];

  useEffect(() => {
    if (currentIdx >= quesitonLen) {
      history.push('/persona/result');
    }
  }, [currentIdx]);

  const handleCardClick = () => {
    setCurrentIdx(currentIdx + 1);
  };

  const renderCardList = choice.map((item: choiceProvider) => {
    return (
      <Card key={item.id} uid={item.id} contents={item.contents} onClick={handleCardClick}></Card>
    );
  });

  return (
    <S.Container>
      <S.BackButton>-</S.BackButton>

      <S.QuestionID>{`${currentIdx + 1}/${quesitonLen}`}</S.QuestionID>
      <S.Title>{title}</S.Title>

      <S.CardDiv>{renderCardList}</S.CardDiv>

      <S.ProgressDiv />
    </S.Container>
  );
}
