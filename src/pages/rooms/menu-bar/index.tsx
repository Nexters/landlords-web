import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHECKLIST_STATE, roomsAction, roomsSelector } from 'store/roomsSlice';

import * as S from './styled';

export default function MenuBar() {
  const [visible, setVisible] = useState(false);
  const { currentChecklistState } = useSelector(roomsSelector);
  const { setCurrentStatus } = roomsAction;
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

  const dropdownItems = Object.values(CHECKLIST_STATE).map((status) => (
    <S.DropdownItem key={status} onClick={() => dispatch(setCurrentStatus(status))}>
      <S.DropdownText>{status}</S.DropdownText>
      <S.DropdownRadioButton selected={currentChecklistState === status} />
    </S.DropdownItem>
  ));

  return (
    <S.Container>
      <S.Title>지금은</S.Title>
      <div ref={dropdownWrapperRef}>
        <S.DropdownButton onClick={() => setVisible(!visible)}>
          <S.CurrrentLabel>
            {currentChecklistState}
            {visible ? <S.Triangle direction='UP' /> : <S.Triangle direction='DOWN' />}
          </S.CurrrentLabel>
        </S.DropdownButton>
        <S.DropdownItemsWrapper visible={visible}>{dropdownItems}</S.DropdownItemsWrapper>
      </div>
    </S.Container>
  );
}
