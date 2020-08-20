import request from 'api/request';
import Icon from 'components/icon';
import { Choice, Persona, PersonaQuestion } from 'entity/persona';
import { PersonaQuestionsResponse } from 'entity/response';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from './card';
import Loading from './loading';
import * as S from './styled';

interface QuestionsState {
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

  const [questions, setQuestions] = useState<PersonaQuestion[]>([]);
  const fetchQuestion = async () => {
    const { data } = await request.get<PersonaQuestionsResponse>('/persona/questions');
    setQuestions(data.questions);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const [questionsState, setQuestionsState] = useState<QuestionsState>({
    currentIdx: 0,
    answer: [],
    isLoading: false,
  });

  const fetchAnswer = async () => {
    const params = new URLSearchParams();
    questionsState.answer.forEach((answer: number) => {
      params.append('choice_answers', answer.toString());
    });

    const res = await request.get<Persona>('/persona', { params: params });
    const data = res.data;
    history.push(
      `/persona/result?type=${data.type}
      &description=${data.description}
      &recommended_place=${data.recommended_place}`,
    );
  };

  useEffect(() => {
    if (questionsState.isLoading) {
      fetchAnswer();
    }
  }, [questionsState]);

  const { title, choices }: Choices = questions[questionsState.currentIdx]
    ? questions[questionsState.currentIdx]
    : { title: '', choices: [{ uid: 0, question_id: 0, contents: '', category: 0 }] };
  const progressVal = (100 / questions.length) * (questionsState.currentIdx + 1);

  const handleCardClick = (index: number) => {
    const loadingFlag = questionsState.currentIdx == questions.length - 1 ? true : false;
    setQuestionsState({
      currentIdx: questionsState.currentIdx + 1,
      answer: [...questionsState.answer, choices[index].uid],
      isLoading: loadingFlag,
    });
  };

  const handleBackButtonClick = () => {
    if (questionsState.currentIdx == 0) {
      history.push('/persona');
    } else {
      setQuestionsState({
        currentIdx: questionsState.currentIdx - 1,
        answer: questionsState.answer.slice(0, questionsState.answer.length - 1),
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

  return questionsState.isLoading ? (
    <Loading />
  ) : (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBackButtonClick}>
          <Icon name='NAVIGATION_BACKWARD' size='16' />
        </S.BackButton>
        <Icon name='TITLE_LOGO' opacity='0.6' />
      </S.Header>

      <S.TitleWrapper>
        Q.{questionsState.currentIdx + 1}
        <br />
        {title}
      </S.TitleWrapper>
      <S.CardsWrapper>{cardList}</S.CardsWrapper>

      <S.ProgressLength>
        {questionsState.currentIdx + 1}/{questions.length}
      </S.ProgressLength>
      <S.ProgressContainer>
        <S.ProgressComplete barWidth={progressVal}></S.ProgressComplete>
      </S.ProgressContainer>
    </S.Container>
  );
}
