import { Checkbox, Icon } from 'components';
import { CheckItem, Question } from 'entity/checklist';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
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

  const handleClick = (check: CheckItem) => () =>
    check.checked ? dispatch(removeAnswer(check)) : dispatch(addAnswer(check));

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
                      onClick={handleClick(check)}
                    />
                  ))}
                </S.CheckboxGroup>
              ) : (
                <Checkbox
                  checked={question.checks[0].checked || false}
                  onClick={handleClick(question.checks[0])}
                />
              )}
            </S.CheckboxGroupWrapper>
          ))}
        </S.Container>
      ))}
    </>
  );
}
