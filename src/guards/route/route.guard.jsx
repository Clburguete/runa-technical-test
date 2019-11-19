//vendors
import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';

//config
import { ROUTES } from '@routing';


export class RouteGuard extends Component {

  render = () => {
    const { isUserLogged, children, location: { pathname } } = this.props;
    return (
      (!isUserLogged && pathname !== '/welcome') ?
        <Redirect to={ROUTES.default.path} />
        :
        <>
          {children}
        </>
    )
  }
}