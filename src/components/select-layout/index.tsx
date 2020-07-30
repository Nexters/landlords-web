import { Checkbox, Icon } from 'components';
import { SelectItem } from 'entity/checklist';
import React, { ChangeEvent, MouseEvent, ReactElement } from 'react';

import * as S from './styled';

interface SelectLayoutProps {
  label: string;
  items: SelectItem[];
  onClick?: (index: number) => void;
}

export default function SelectLayout({
  label,
  items,
  onClick = () => {},
}: SelectLayoutProps): ReactElement {
  return (
    <S.Container>
      <S.TitleLayer>
        <span>{label}</span>
        <Icon name='NAVIGATION_OPEN_DOWN' size='22' />
      </S.TitleLayer>
      {items.map((item, index) => (
        <S.CheckItemWrapper key={index}>
          <span>{item.description}</span>
          <S.CheckboxGroup>
            {item.value.map((checkItem) => (
              <Checkbox
                key={checkItem.name}
                label={checkItem.name}
                checked={checkItem.selected}
                onClick={() => onClick(index)}
              />
            ))}
          </S.CheckboxGroup>
        </S.CheckItemWrapper>
      ))}
    </S.Container>
  );
}
