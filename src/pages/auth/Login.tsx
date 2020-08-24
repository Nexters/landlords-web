import { apiBaseURL } from 'api/constants';
import { useOAuth } from 'api/useOAuth';
import { Icon } from 'components';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { LOGIN_STATE } from '../../constants';
import * as S from './styled';

export default function Login() {
  const history = useHistory();
  const { loginState } = useOAuth();
  const handleClick = () => {
    if (loginState === LOGIN_STATE.SUCCESS) {
      history.push('/rooms');
    } else {
      window.location.href = `${apiBaseURL}/oauth/google`;
    }
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
