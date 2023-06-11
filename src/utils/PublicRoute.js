import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';

export default function PublicRoute({ component, token, logOut, setToken, ...props }) {
  const Component = component;
  let userId;
  if (TokenService.getToken()) {
    userId = TokenService.getUserIdFromToken(TokenService.getToken());
  }

  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Redirect to={`/alacarte/${userId}`} />
        ) : (
          <Component token={token} setToken={setToken} logOut={logOut}  {...componentProps} />
        )
      }
    />
  );
}
