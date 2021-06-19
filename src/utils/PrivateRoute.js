import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';

export default function PrivateRoute({
  component,
  token,
  setToken,
  apiChannels,
  ...props
}) {
  const Component = component;
  return (
    <Route
      {...props}
      apiChannels={apiChannels}
      render={(componentProps) =>
        token ? (
          <Component token={token} setToken={setToken} {...componentProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
}
