import React, { ReactElement } from 'react';
import * as S from './styled';

type ButtonProps = {};

export default function Button({}: ButtonProps): ReactElement {
  return (
    <S.Container>
      <button>버튼</button>
    </S.Container>
  );
}
