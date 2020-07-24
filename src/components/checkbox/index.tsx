import React, { ReactElement } from 'react';

import * as S from './styled';

export default function Checkbox(): ReactElement {
  return (
    <S.Container>
      <input type='checkbox' name='' value='' checked />
    </S.Container>
  );
}
