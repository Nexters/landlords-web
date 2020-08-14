import { Checkbox, Icon } from 'components';
import { CheckItem } from 'entity/checklist';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomsAction, roomsSelector } from 'store/roomsSlice';
import { extractQuestionsByLabel } from 'utils/checklist';

import * as S from './styled';

export default function SingleCheckLayout(): ReactElement {
  const { singleCheckQuestions } = useSelector(roomsSelector);
  const { addAnswer, removeAnswer } = roomsAction;
  const dispatch = useDispatch();
  const questionsByLabel = extractQuestionsByLabel(singleCheckQuestions);

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
              <Checkbox
                checked={question.checks[0].checked || false}
                onClick={handleClick(question.checks[0])}
              />
            </S.CheckboxGroupWrapper>
          ))}
        </S.Container>
      ))}
    </>
  );
}
