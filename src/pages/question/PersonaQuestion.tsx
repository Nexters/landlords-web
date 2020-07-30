import Icon from 'components/icon';
import React, { ReactElement, useMemo, useState } from 'react';

import { Choice } from '../../entity';
import Card from './card';
import Loading from './loading';
import questions from './questions';
import * as S from './styled';

export default function PersonaQuestionPage(): ReactElement {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answer, setAnswer] = useState<Choice[]>([]);
  const questionLen = questions.length;
  const { title, choices } =
    questions[currentIdx] != undefined ? questions[currentIdx] : questions[0];
  const questionNum = currentIdx + 1 < 10 ? '0' + (currentIdx + 1).toString() : currentIdx + 1;
  const progressVal = (100 / questionLen) * (currentIdx + 1);
  const isLoading = useMemo(() => (currentIdx >= questionLen ? true : false), [currentIdx]);

  const getChoice = (index: number) => choices[index];

  const handleCardClick = (index: number) => {
    setAnswer(() => [...answer, getChoice(index)]);
    setCurrentIdx(currentIdx + 1);
  };

  const handleBackButtonClick = () => {
    setAnswer(() => answer.splice(answer.length - 1, 1));
    setCurrentIdx(currentIdx - 1);
  };

  const cardList = choices.map((item: Choice, index: number) => {
    return (
      <Card
        key={index}
        uid={index}
        contents={item.contents}
        index={index}
        onClick={() => handleCardClick(index)}></Card>
    );
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <S.Container>
      <S.BackButton onClick={handleBackButtonClick}>
        <Icon name='NAVIGATION_BACKWARD'></Icon>
      </S.BackButton>

      <S.TitleDiv>
        {questionNum}
        <br />
        {title}
      </S.TitleDiv>
      <S.CardDiv>{cardList}</S.CardDiv>
      <S.ProgressContainer>
        <S.ProgressComplete barWidth={progressVal}></S.ProgressComplete>
      </S.ProgressContainer>
    </S.Container>
  );
}
