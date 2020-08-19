import { apiBaseURL } from 'api/constants';
import { useOAuth } from 'api/useOAuth';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import { LOGIN_STATE } from '../../constants';

interface PrivateRouteProps {
  component: any;
  [key: string]: any;
}

export default function PrivateRoute({
  component: Component,
  ...otherProps
}: PrivateRouteProps) {
  const { loginState } = useOAuth();
  const renderView = (props: RouteComponentProps) => {
    if (loginState === LOGIN_STATE.LOADING) {
      return <div>Loading...</div>;
    }
    if (loginState === LOGIN_STATE.ERROR) {
      window.location.href = `${apiBaseURL}/oauth/google`;
      return <></>;
    }
    return <Component {...props} />;
  };

  return <Route {...otherProps} component={renderView} />;
}
