import { decodeTokenWithJWK } from 'api/auth';
import { useEffect, useState } from 'react';
import cookie from 'react-cookies';

import { LOGIN_STATE } from '../constants';
import { setAuthorization } from './request';
interface State {
  user: any;
  loginState: string;
}

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
  const [state, setState] = useState<State>({
    user: defaultUserState,
    loginState: LOGIN_STATE.LOADING,
  });

  const verifyUser = async () => {
    const token = sessionStorage.getItem('accessToken') || cookie.load('token');
    if (token) {
      const user: any = await decodeTokenWithJWK(token);
      setState({
        user,
        loginState: LOGIN_STATE.SUCCESS,
      });
      sessionStorage.setItem('userName', user.name);
      sessionStorage.setItem('accessToken', token);
      setAuthorization(token);
    } else {
      sessionStorage.clear();
      setState({ ...state, loginState: LOGIN_STATE.ERROR });
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return state;
};
