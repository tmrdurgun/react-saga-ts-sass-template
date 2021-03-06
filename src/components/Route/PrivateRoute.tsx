import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { IPrivateRoute } from './IPrivateRoute';

class PrivateRoute extends React.Component <IPrivateRoute> {
  render() {
    const { rest } = this.props;
    const Component = this.props.component;
    return (
      <Route
        {...rest}
        render={(props) =>
          (localStorage.getItem('token') ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          ))}
      />
    );
  }
}

export default PrivateRoute;
