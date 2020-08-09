import { decodeTokenWithJWK } from 'api/auth';
import { useEffect,useState } from 'react';

import { LOGIN_STATE } from '../constants';

const defaultUserState = {
  email: '',
  exp: 0,
  family_name: '',
  given_name: '',
  iat: 0,
  locale: '',
  name: '',
  picture: '',
};

export const useOAuth = () => {
  const [user, setUser] = useState<any>(defaultUserState);
  const [loginState, setLoginState] = useState(LOGIN_STATE.LOADING);

  const verifyUser = async () => {
    try {
      let token = sessionStorage.getItem('accessToken');
      if (!token) {
        const cookie = document.cookie;
        if (!cookie) {
          throw new Error('Authentication required');
        }
        token = cookie.replace('token=', '');
        sessionStorage.setItem('accessToken', token);
      }
      const user = await decodeTokenWithJWK(token);
      setUser(user);
      setLoginState(LOGIN_STATE.SUCCESS);
    } catch {
      setLoginState(LOGIN_STATE.ERROR);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return { user, loginState };
};
