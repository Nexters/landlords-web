import React, { useState } from 'react';

import * as S from './styled';

export default function MenuBar() {
  enum STATUS {
    SEEKING = '방보는중',
    BEFORE_CONTRACT = '방계약전',
    MOVING = '이사중',
  }
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(STATUS.SEEKING);
  const dropdownItems = [STATUS.SEEKING, STATUS.BEFORE_CONTRACT, STATUS.MOVING].map(text => {

    return (
      <S.DropdownItem key={`key-${text}`}>
        <S.DropdownText>{text}</S.DropdownText>
        <S.DropdownRadioButton
          selected={text === selectedItem}
          onClick={() => handleDropdownItemClick(text)}
        />
      </S.DropdownItem>
    );
  });

  const handleDropdownButtonClick = () => setVisible(!visible);
  const handleDropdownItemClick = (text: STATUS) => setSelectedItem(text);

  return (
    <S.MenuBarContainer>
      <S.MenuBarText>지금은</S.MenuBarText>
      <S.MenuBarDropdownButton onClick={handleDropdownButtonClick}>
        <S.MenuBarDropdownButtonText>
          {selectedItem} ▾{/* 아이콘 정식 제공되면 추후 수정 예정  */}
        </S.MenuBarDropdownButtonText>
      </S.MenuBarDropdownButton>
      <S.DropdownBox visible={visible}>
        {dropdownItems}
      </S.DropdownBox>
    </S.MenuBarContainer>
  );
}
