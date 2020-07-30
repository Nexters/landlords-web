import { Checkbox, Icon } from 'components';
import { CheckItem } from 'entity/checklist';
import React, { ChangeEvent, MouseEvent, ReactElement } from 'react';

import * as S from './styled';

interface CheckboxLayoutProps {
  label: string;
  items: CheckItem[];
  onClick?: (index: number) => void;
}

export default function CheckboxLayout({
  label,
  items,
  onClick = () => {},
}: CheckboxLayoutProps): ReactElement {
  return (
    <S.Container>
      <S.TitleLayout>
        <span>{label}</span>
        <Icon name='NAVIGATION_OPEN_DOWN' size='22' />
      </S.TitleLayout>
      {items.map((item, index) => (
        <S.CheckItem key={index}>
          <span>{item.description}</span>
          <Checkbox checked={item.value as boolean} onClick={() => onClick(index)} />
        </S.CheckItem>
      ))}
    </S.Container>
  );
}
