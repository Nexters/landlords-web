import { Checkbox, Icon } from 'components';
import { SelectItem, SimpleCheckItem } from 'entity/checklist';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import * as S from './styled';

export default function SelectLayout(): ReactElement {
  const { selectItemsByLabel } = useSelector(roomsSelector);
  const { setSelectItemsByLabel } = roomsAction;
  const dispatch = useDispatch();

  const handleCheckboxClick = (label: string, selectIndex: number, checkIndex: number) => () => {
    const selectItems = selectItemsByLabel[label].slice();
    const checkItems = (selectItems[selectIndex].value as SimpleCheckItem[]).slice();
    checkItems[checkIndex] = {
      ...checkItems[checkIndex],
      checked: !checkItems[checkIndex].checked,
    };
    selectItems[selectIndex] = { ...selectItems[selectIndex], value: checkItems };
    const nextSelectItemsByLabel = { ...selectItemsByLabel, [label]: selectItems };
    dispatch(setSelectItemsByLabel(nextSelectItemsByLabel));
  };

  return (
    <>
      {Object.keys(selectItemsByLabel).map((label) => (
        <S.Container key={label}>
          <S.TitleLayer>
            <span>{label}</span>
            <Icon name='NAVIGATION_OPEN_DOWN' size='22' />
          </S.TitleLayer>
          {selectItemsByLabel[label].map((selectItem, selectIndex) => (
            <S.CheckItemWrapper key={selectIndex}>
              <span>{selectItem.description}</span>
              <S.CheckboxGroup>
                {(selectItem as SelectItem).value.map((item, checkIndex) => (
                  <Checkbox
                    key={item.name}
                    label={item.name}
                    checked={item.checked}
                    onClick={handleCheckboxClick(label, selectIndex, checkIndex)}
                  />
                ))}
              </S.CheckboxGroup>
            </S.CheckItemWrapper>
          ))}
        </S.Container>
      ))}
    </>
  );
}
