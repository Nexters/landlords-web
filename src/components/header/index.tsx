import { Icon } from 'components';
import { IconName } from 'components/icon';
import React from 'react';

import * as S from './styled';

interface HeaderProps {
  leftIconName?: IconName;
  leftIconSize?: string;
  title: string;
  children?: React.ReactNode;
}

export default function Header({
  title,
  children,
  leftIconName,
  leftIconSize = '16px',
} : HeaderProps) {

  return (
    <S.Container>
      <S.TitleLeftContainer>
        {leftIconName && <Icon name={leftIconName} size={leftIconSize}/>}
        <S.Title>{title}</S.Title>
      </S.TitleLeftContainer>
      {children}
    </S.Container>
  );
}
