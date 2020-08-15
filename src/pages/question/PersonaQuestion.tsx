import request from 'api/request';
import Icon from 'components/icon';
import { Choice, PersonaQuestion, Questions } from 'entity/persona';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from './card';
import Loading from './loading';
import * as S from './styled';

interface State {
  currentIdx: number;
  answer: number[];
  isLoading: boolean;
}

interface Choices {
  title: string;
  choices: Choice[];
}

export default function PersonaQuestionPage(): ReactElement {
  const history = useHistory();

  const [question, setQuestion] = useState<PersonaQuestion[]>([]);
  const fetchQuestion = async () => {
    const { data } = await request.get<Questions>('/persona/questions');
    setQuestion(data.questions);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const [state, setState] = useState<State>({ currentIdx: 0, answer: [], isLoading: false });
  useEffect(() => {
    if (state.isLoading) {
      // fetchAnswer();
    }
  }, [state]);

  const { title, choices }: Choices = question[state.currentIdx]
    ? question[state.currentIdx]
    : { title: '', choices: [{ uid: 0, question_id: 0, contents: '', category: 0 }] };

  const questionNum =
    state.currentIdx + 1 < 10 ? '0' + (state.currentIdx + 1).toString() : state.currentIdx + 1;
  const progressVal = (100 / question.length) * (state.currentIdx + 1);

  const handleCardClick = (index: number) => {
    if (state.currentIdx == question.length - 1) {
      setState({
        currentIdx: state.currentIdx + 1,
        answer: [...state.answer, choices[index].uid],
        isLoading: true,
      });
    } else {
      setState({
        currentIdx: state.currentIdx + 1,
        answer: [...state.answer, choices[index].uid],
        isLoading: false,
      });
    }
  };

  const handleBackButtonClick = () => {
    if (state.currentIdx == 0) {
      history.push('/persona');
    } else {
      setState({
        currentIdx: state.currentIdx - 1,
        answer: state.answer.splice(state.answer.length - 1, 1),
        isLoading: false,
      });
    }
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

  if (state.isLoading) {
    return <Loading />;
  }
  return (
    <S.Container>
      <S.BackButton onClick={handleBackButtonClick}>
        <Icon name='NAVIGATION_BACKWARD' size='16' />
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
