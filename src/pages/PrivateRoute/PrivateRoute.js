import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuht from '../../hooks/useAuth';
import loader from '../../images/loader.gif'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuht()
  if (isLoading) {
    return <div className='h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;