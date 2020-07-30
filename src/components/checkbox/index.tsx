import { Icon } from 'components';
import React, { ChangeEvent, FocusEvent, MouseEvent, ReactElement } from 'react';

import * as S from './styled';

interface CheckboxProps {
  checked: boolean;
  onClick: (e: MouseEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
}

export default function Checkbox({
  checked,
  onClick,
  className,
  label,
}: CheckboxProps): ReactElement {
  return (
    <S.Container className={className} onClick={onClick}>
      {checked ? <Icon name='CHECKED_BOX' size='18' /> : <Icon name='UNCHECKED_BOX' size='18' />}
      {label && <S.StyledLabel>{label}</S.StyledLabel>}
    </S.Container>
  );
}
