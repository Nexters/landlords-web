import React from 'react';

import * as S from './styled';

export default function MenuBar() {

  return (
    <S.MenuBarContainer>
      <S.MenuBarText>지금은</S.MenuBarText>
      <S.MenuBarDropdownButton>
        <S.MenuBarDropdownButtonText>
          방보는 중 ▾{/* 아이콘 정식 제공되면 추후 수정 예정  */}
        </S.MenuBarDropdownButtonText>
      </S.MenuBarDropdownButton>
    </S.MenuBarContainer>
  );
}
