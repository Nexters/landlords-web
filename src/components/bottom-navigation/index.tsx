import React, { useState } from 'react';

import * as S from './styled';

enum TEXT {
  CHECKLIST = '체크리스트',
  WIKI = '백과사전',
  EXPLORE = '둘러보기'
}

export default function BottomNavigation() {
  const [selected, setSelected] = useState(TEXT.CHECKLIST);
  const navigationItems = [TEXT.CHECKLIST, TEXT.WIKI, TEXT.EXPLORE].map((text) => (
    <S.NavigationItem key={`key-${text}`} onClick={() => setSelected(text)}>
      <S.IconWrapper selected={text === selected} />
      <S.Text>{text}</S.Text>
    </S.NavigationItem>
  ),
  );

  return (
    <S.Container>
      {navigationItems}
    </S.Container>
  );
}
