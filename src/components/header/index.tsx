import { Icon } from 'components';
import { IconName } from 'components/icon';
import React from 'react';

import * as S from './styled';

interface HeaderProps {
  leftIconName?: IconName;
  leftIconSize?: string;
  title: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Header({
  title,
  children,
  leftIconName,
  leftIconSize = '16px',
  onClick = () => {},
}: HeaderProps) {
  return (
    <S.Container>
      {leftIconName ? (
        <Icon name={leftIconName} size={leftIconSize} onClick={onClick} />
      ) : (
        <S.EmptyContainer />
      )}
      <S.Title>{title}</S.Title>
      {children || <S.EmptyContainer />}
    </S.Container>
  );
}
