import Icon from 'components/icon';
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Choice } from '../../entity';
import Card from './card';
import questions from './questions';
import * as S from './styled';

export default function PersonaQuestionPage(): ReactElement {
  const history = useHistory();
  const [currentIdx, setCurrentIdx] = useState(0);
  const { title, choices } = questions[currentIdx];
  const quesitonLen = questions.length;
  const questionNum = currentIdx + 1 < 10 ? '0' + (currentIdx + 1).toString() : currentIdx + 1;
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
      <S.BackButton>
        <Icon name='NAVIGATION_BACKWARD'></Icon>
      </S.BackButton>

      <S.TitleDiv>
        <S.Title>
          {questionNum}
          <br />
          {title}
        </S.Title>
      </S.TitleDiv>
      <S.CardDiv>{renderCardList}</S.CardDiv>
      <S.ProgressContainer>
        <S.ProgressComplete barWidth={progressVal}></S.ProgressComplete>
      </S.ProgressContainer>
    </S.Container>
  );
}
