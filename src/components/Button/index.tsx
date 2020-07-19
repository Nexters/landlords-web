import React, { ReactElement } from 'react';
import * as S from './styled';

type ButtonProps = {
  name: string;
  value: string;
};

export default function Button({ name, value }: ButtonProps): ReactElement {
  return (
    <S.Container>
      <S.Input type="button" name={name} value={value} />
    </S.Container>
  );
}
