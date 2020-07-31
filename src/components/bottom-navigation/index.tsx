import React, { useState } from 'react';

import * as S from './styled';

export default function BottomNavigation() {
  enum TEXT {
    CHECKLIST = '체크리스트',
    WIKI = '백과사전',
    EXPLORE = '둘러보기'
  }
  const generateKey = (source: string) => `key-${source}`;
  const [selected, setSelected] = useState(generateKey(TEXT.CHECKLIST));

  const navigationItems = [TEXT.CHECKLIST, TEXT.WIKI, TEXT.EXPLORE].map((text) => {
    const key = generateKey(text);
    return(
      <S.NavigationItem key={key} onClick={() => setSelected(key)}>
        <S.IconWrapper selected={key === selected} />
        <S.Text>{text}</S.Text>
      </S.NavigationItem>
    );
  });

  return (
    <S.Container>
      {navigationItems}
    </S.Container>
  );
}
