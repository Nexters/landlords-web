import { apiBaseURL } from 'api/constants';
import request from 'api/request';
import { useOAuth } from 'api/useOAuth';
import { Icon } from 'components';
import firebase from 'firebase';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { LOGIN_STATE } from '../../constants';
import * as S from './styled';

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOAMIN,
};
firebase.initializeApp(config);


export default function Login() {
  const history = useHistory();
  const { loginState } = useOAuth();

  useEffect(() => {
    getGoogleOAuthResponse();
  }, []);

  useEffect(() => {
    if (loginState === LOGIN_STATE.SUCCESS) {
      history.push('/rooms');
    }
  }, [loginState]);

  const getGoogleOAuthResponse = async () => {
    // Google의 타입에 문제가 있어 credential.accessToken이 없다는 에러가 발생하여 any로 취급.
    const { credential } = await firebase.auth().getRedirectResult() as any;
    console.log('credential', credential);
    if (credential && credential.accessToken) {
      const requestParam = {
        oauth_type: 'Google',
        access_token: credential.accessToken,
      };
      try {
        const { data } = await request.post<{token: string}>(`${apiBaseURL}/token`, requestParam);
        if (!data.token) {
          throw new Error('Token Not Found');
        }
        sessionStorage.setItem('accessToken', data.token);
        history.push('/rooms');
      } catch(e) {
        console.warn(e);
      }
      
    }
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  return (
    <S.Container>
      <S.IconWrapper>
        <Icon name='TEMP_LOGO' size='96' />
      </S.IconWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={signInWithGoogle}>
          <S.ButtonText>구글계정으로 시작하기</S.ButtonText>
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
