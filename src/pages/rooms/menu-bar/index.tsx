import React, { useEffect, useRef, useState } from 'react';

import * as S from './styled';

export const CATEGORIES = {
  SEEKING: '방보는중',
  BEFORE_CONTRACT: '방계약전',
  MOVING: '이사중',
};

interface MenuBarProps {
  currentCategory: string;
  onSelect: (category: string) => void;
}

export default function MenuBar({ currentCategory, onSelect }: MenuBarProps) {
  const [visible, setVisible] = useState(false);
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

  const dropdownItems = Object.values(CATEGORIES).map((category) => (
    <S.DropdownItem key={category} onClick={() => onSelect(category)}>
      <S.DropdownText>{category}</S.DropdownText>
      <S.DropdownRadioButton selected={category === currentCategory} />
    </S.DropdownItem>
  ));

  return (
    <S.Container>
      <S.Title>지금은</S.Title>
      <div ref={dropdownWrapperRef}>
        <S.DropdownButton onClick={() => setVisible(!visible)}>
          <S.CurrrentLabel>
            {currentCategory}
            {visible ? <S.Triangle direction='UP' /> : <S.Triangle direction='DOWN' />}
          </S.CurrrentLabel>
        </S.DropdownButton>
        <S.DropdownItemsWrapper visible={visible}>{dropdownItems}</S.DropdownItemsWrapper>
      </div>
    </S.Container>
  );
}
