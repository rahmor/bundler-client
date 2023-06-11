import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  component,
  token,
  setToken,
  logOut,
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
          <Component token={token} setToken={setToken} logOut={logOut} {...componentProps} />
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
