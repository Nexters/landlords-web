import { CHECKLIST_STATUS } from 'entity/checklist';
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

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const dropdownItems = Object.values(CHECKLIST_STATUS).map((status) => (
    <S.DropdownItem key={status} onClick={() => dispatch(setChecklistStatus(status))}>
      <S.DropdownText>{status}</S.DropdownText>
      <S.DropdownRadioButton selected={checklistStatus === status} />
    </S.DropdownItem>
  ));

  return (
    <S.Container>
      <S.Title>지금은</S.Title>
      <div ref={dropdownWrapperRef}>
        <S.DropdownButton onClick={() => setVisible(!visible)}>
          <S.CurrrentLabel>
            {checklistStatus}
            {visible ? <S.Triangle direction='UP' /> : <S.Triangle direction='DOWN' />}
          </S.CurrrentLabel>
        </S.DropdownButton>
        <S.DropdownItemsWrapper visible={visible}>{dropdownItems}</S.DropdownItemsWrapper>
      </div>
    </S.Container>
  );
}
