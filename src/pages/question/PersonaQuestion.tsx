import Icon from 'components/icon';
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Choice } from '../../entity';
import Card from './card';
import Loading from './loading';
import questions from './questions';
import * as S from './styled';

export default function PersonaQuestionPage(): ReactElement {
  const history = useHistory();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answer, setAnswer] = useState<Choice[]>([]);
  const [isLoading, setLoading] = useState(false);
  const { title, choices } = questions[currentIdx];
  const questionLen = questions.length;
  const questionNum = currentIdx + 1 < 10 ? '0' + (currentIdx + 1).toString() : currentIdx + 1;
  const progressVal = (100 / questionLen) * (currentIdx + 1);

  const getChoice = (index: number) => {
    return choices[index];
  };

  const handleCardClick = (index: number) => {
    setAnswer(() => [...answer, getChoice(index)]);
    if (currentIdx < questionLen - 1) {
      setCurrentIdx(currentIdx + 1);
    }
    if (currentIdx >= questionLen - 1) {
      setLoading(true);
      // history.push('/persona/result');
    }
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
  } else {
    return (
      <S.Container>
        <S.BackButton onClick={handleBackButtonClick}>
          <Icon name='NAVIGATION_BACKWARD'></Icon>
        </S.BackButton>

        <S.TitleDiv>
          <S.Title>
            {questionNum}
            <br />
            {title}
          </S.Title>
        </S.TitleDiv>
        <S.CardDiv>{cardList}</S.CardDiv>
        <S.ProgressContainer>
          <S.ProgressComplete barWidth={progressVal}></S.ProgressComplete>
        </S.ProgressContainer>
      </S.Container>
    );
  }
}
