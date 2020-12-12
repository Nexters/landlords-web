import { apiBaseURL } from 'api/constants';
import { useOAuth } from 'api/useOAuth';
import { Loading } from 'components';
import React from 'react';
import { useHistory } from 'react-router-dom';
import color from 'styles/color';
import { ContainerWrapper } from 'styles/styled';

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
    <ContainerWrapper bgColor={color.primaryDeepDarkBlue}>
      <S.Container>
        <Loading width={300} height={300} image={complete} />
        <S.Label>나만의 체크리스트를 보고 싶다면?</S.Label>
        <S.Button onClick={handleClick}>
          <S.ButtonText>카카오 계정으로 시작하기</S.ButtonText>
        </S.Button>
      </S.Container>
    </ContainerWrapper>
  );
}
