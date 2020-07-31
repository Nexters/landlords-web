import React from 'react';

import * as S from './styled';

interface HeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function Header({ title, children } : HeaderProps) {

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
}
