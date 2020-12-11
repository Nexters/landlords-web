import { apiBaseURL } from 'api/constants';
import { useOAuth } from 'api/useOAuth';
import { Loading } from 'components';
import React from 'react';
import { useHistory } from 'react-router-dom';

import complete from '../../assets/complete';
import { LOGIN_STATE } from '../../constants';
import * as S from './styled';

export default function Login() {
  const history = useHistory();
  const { loginState } = useOAuth();
  const handleClick = () => {
    if (loginState === LOGIN_STATE.SUCCESS) {
      history.push('/rooms');
    } else {
      window.location.href = `${apiBaseURL}/oauth/kakao`;
    }
  };

  return (
    <S.Container>
      <Loading width={300} height={300} marginTop={24.3} image={complete} />
      <S.ButtonWrapper>
        <S.Button onClick={handleClick}>
          <S.ButtonText>카카오 계정으로 시작하기</S.ButtonText>
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
