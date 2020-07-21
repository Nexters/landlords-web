import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

type ButtonProps = {
  name: string;
  value: string;
  link: string;
};

export default function Button({ name, value, link }: ButtonProps): ReactElement {
  return (
    <S.Container>
      <Link to={link}>
        <S.Input type="button" name={name} value={value} />
      </Link>
    </S.Container>
  );
}
