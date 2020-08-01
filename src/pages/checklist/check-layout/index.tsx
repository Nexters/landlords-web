import { Checkbox, Icon } from 'components';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import * as S from './styled';

export default function CheckLayout(): ReactElement {
  const { checkItemsByLabel } = useSelector(roomsSelector);
  const { setCheckItemsByLabel } = roomsAction;
  const dispatch = useDispatch();

  const handleCheckboxClick = (label: string, index: number) => () => {
    const checkItems = checkItemsByLabel[label].slice();
    checkItems[index] = { ...checkItems[index], value: !checkItems[index].value };
    const nextCheckItemsByLabel = { ...checkItemsByLabel, [label]: checkItems };
    dispatch(setCheckItemsByLabel(nextCheckItemsByLabel));
  };

  return (
    <>
      {Object.keys(checkItemsByLabel).map((label) => (
        <S.Container key={label}>
          <S.TitleLayer>
            <span>{label}</span>
            <Icon name='NAVIGATION_OPEN_DOWN' size='22' />
          </S.TitleLayer>
          {checkItemsByLabel[label].map((item, index) => (
            <S.CheckItemWrapper key={index}>
              <span>{item.description}</span>
              <Checkbox
                checked={item.value as boolean}
                onClick={handleCheckboxClick(label, index)}
              />
            </S.CheckItemWrapper>
          ))}
        </S.Container>
      ))}
    </>
  );
}
