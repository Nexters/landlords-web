import { Icon } from 'components';
import React from 'react';

import * as S from './styled';

export default function Login() {
  const handleClick = () => {
    // TODO redirect to google OAuth
    alert('clicked');
  };
  return (
    <S.Container>
      <S.IconWrapper>
        <Icon name='TEMP_LOGO' size='96' />
      </S.IconWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={handleClick}>
          <S.ButtonText>구글계정으로 시작하기</S.ButtonText>
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
