import React, { ReactElement } from 'react';
import * as S from './styled';

type CheckboxProps = {};

export default function Checkbox({}: CheckboxProps): ReactElement {
  return (
    <S.Container>
      <input type='checkbox' name='' value='' checked />
    </S.Container>
  );
}
