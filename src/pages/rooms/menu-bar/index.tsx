import { STATUS_MATCHER, StatusType } from 'entity/checklist';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import * as S from './styled';

export default function MenuBar() {
  const [visible, setVisible] = useState(false);
  const { checklistStatus } = useSelector(roomsSelector);
  const { setChecklistStatus } = roomsAction;
  const dispatch = useDispatch();
  const dropdownWrapperRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: any) => {
    if (dropdownWrapperRef.current && !dropdownWrapperRef.current.contains(e.target)) {
      setVisible(false);
    }
  };

  const handleDropdownItemClick = (status: StatusType) => () => {
    dispatch(setChecklistStatus(status));
    setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const dropdownItems = Object.keys(STATUS_MATCHER).map((status) => (
    <S.DropdownItem key={status} onClick={handleDropdownItemClick(status as StatusType)}>
      <S.DropdownText>{STATUS_MATCHER[status as StatusType]}</S.DropdownText>
      <S.DropdownRadioButton selected={checklistStatus === status} />
    </S.DropdownItem>
  ));

  return (
    <S.Container>
      <S.Title>지금은</S.Title>
      <div style={{ backgroundColor: 'white', zIndex: 1000 }} ref={dropdownWrapperRef}>
        <S.DropdownButton onClick={() => setVisible(!visible)}>
          <S.CurrrentLabel>
            {STATUS_MATCHER[checklistStatus]}
            {visible ? <S.Triangle direction='UP' /> : <S.Triangle direction='DOWN' />}
          </S.CurrrentLabel>
        </S.DropdownButton>
        <S.DropdownItemsWrapper visible={visible}>{dropdownItems}</S.DropdownItemsWrapper>
      </div>
    </S.Container>
  );
}
