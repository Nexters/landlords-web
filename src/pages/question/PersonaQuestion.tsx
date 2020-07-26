import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Choice } from '../../entity';
import { personaQuestionSelector,questionsAction } from '../../store/personaQuestionsSlice';
import Card from './card';
import * as S from './styled';;

export default function PersonaQuestionPage(): ReactElement {
  const dispatch = useDispatch();
  const { questions } = useSelector(personaQuestionSelector);
  const history = useHistory();
  const [currentIdx, setCurrentIdx] = useState(0);
  const quesitonLen = questions.length;
  const { title, choices } = questions[currentIdx];
  const progressVal = (100 / quesitonLen) * (currentIdx + 1);

  const handleCardClick = () => {
    if (currentIdx < quesitonLen - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      history.push('/persona/result');
    }
  };

  const renderCardList = choices.map((item: Choice) => {
    return (
      <Card key={item.uid} uid={item.uid} contents={item.contents} onClick={handleCardClick}></Card>
    );
  });

  return (
    <S.Container>
      <S.BackButton>-</S.BackButton>
      <S.QuestionID>{`${currentIdx + 1}/${quesitonLen}`}</S.QuestionID>
      <S.Title>{title}</S.Title>
      <S.CardDiv>{renderCardList}</S.CardDiv>
      <S.Container>PersonaQuestionPage</S.Container>;
      <S.ProgressContainer>
        <S.ProgressComplete barWidth={progressVal}></S.ProgressComplete>
      </S.ProgressContainer>
    </S.Container>
  );
}
