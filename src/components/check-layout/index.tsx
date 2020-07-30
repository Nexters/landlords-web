import { Checkbox, Icon } from 'components';
import { CheckItem } from 'entity/checklist';
import React, { ChangeEvent, MouseEvent, ReactElement } from 'react';

import * as S from './styled';

interface CheckLayoutProps {
  label: string;
  items: CheckItem[];
  onClick?: (index: number) => void;
}

export default function CheckLayout({
  label,
  items,
  onClick = () => {},
}: CheckLayoutProps): ReactElement {
  return (
    <S.Container>
      <S.TitleLayer>
        <span>{label}</span>
        <Icon name='NAVIGATION_OPEN_DOWN' size='22' />
      </S.TitleLayer>
      {items.map((item, index) => (
        <S.CheckItemWrapper key={index}>
          <span>{item.description}</span>
          <Checkbox checked={item.value} onClick={() => onClick(index)} />
        </S.CheckItemWrapper>
      ))}
    </S.Container>
  );
}
