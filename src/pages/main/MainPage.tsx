import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { personaQuestionSelector,questionsAction } from '../../store/personaQuestionsSlice';
import * as S from './styled';

type MainPageProps = {};

export default function MainPage(_: MainPageProps): ReactElement {
  const dispatch = useDispatch();
  const questions = useSelector(personaQuestionSelector);

  useEffect(() => {
    dispatch(questionsAction.setQuestions([
      {
        uid: 2, contents: 'abcd',
        choice_items: [{ uid: 12, contents: 'abcc' }],
        is_multi_choice: true,
      },
    ],
    ));
  }, []);

  console.log('questions', questions);

  return <S.Container>MainPage</S.Container>;
}
