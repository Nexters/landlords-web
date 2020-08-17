import { ANSWERS_URL, DELETE_ANSWER_URL } from 'api/constants';
import request from 'api/request';
import { Checkbox, Icon } from 'components';
import { CheckItem, Question } from 'entity/checklist';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { roomsAction } from 'store/roomsSlice';
import { extractQuestionsByLabel } from 'utils/checklist';

import * as S from './styled';

interface CheckboxLayoutProps {
  questions: Question[];
}

export default function CheckboxLayout({ questions }: CheckboxLayoutProps): ReactElement {
  const { addAnswer, removeAnswer } = roomsAction;
  const dispatch = useDispatch();
  const questionsByLabel = extractQuestionsByLabel(questions);
  const params: { id: string } = useParams();

  const deleteCheckItem = async (check: CheckItem) => {
    const { error, message } = await request.delete<CheckItem>(
      DELETE_ANSWER_URL(params.id, check.uid),
    );
    if (error) alert(message);
    else dispatch(removeAnswer(check));
  };

  const addCheckItem = async (check: CheckItem) => {
    const { error, message } = await request.post<CheckItem>(ANSWERS_URL(params.id), {
      check_id: check.uid,
    });
    if (error) alert(message);
    else dispatch(addAnswer(check));
  };

  const handleCheckboxClick = (check: CheckItem) => () =>
    check.checked ? deleteCheckItem(check) : addCheckItem(check);

  return (
    <>
      {Object.keys(questionsByLabel).map((label) => (
        <S.Container key={label}>
          <S.LabelWrapper>
            <span>{label}</span>
            <Icon name='NAVIGATION_OPEN_DOWN' size='22' />
          </S.LabelWrapper>
          {questionsByLabel[label].map((question) => (
            <S.CheckboxGroupWrapper key={question.uid}>
              <span>{question.title}</span>
              {question.checks.length > 1 ? (
                <S.CheckboxGroup>
                  {question.checks.map((check) => (
                    <Checkbox
                      key={check.uid}
                      label={check.contents}
                      checked={check.checked || false}
                      onClick={handleCheckboxClick(check)}
                    />
                  ))}
                </S.CheckboxGroup>
              ) : (
                <Checkbox
                  checked={question.checks[0].checked || false}
                  onClick={handleCheckboxClick(question.checks[0])}
                />
              )}
            </S.CheckboxGroupWrapper>
          ))}
        </S.Container>
      ))}
    </>
  );
}
