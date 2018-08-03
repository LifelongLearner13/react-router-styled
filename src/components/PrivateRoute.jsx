import React from 'react';
import { Redirect } from 'react-router-dom';
import StyledRoute from './SyledRoute';
import fakeAuth from '../utils/fakeAuth';

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <StyledRoute
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        render ? (
          render(props)
        ) : (
          <Component {...props} />
        )
      ) : (
        <React.Fragment>
          <p>Redirecting ...</p>
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        </React.Fragment>
      )
    }
  />
);

export default PrivateRoute;
