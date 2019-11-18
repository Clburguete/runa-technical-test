//vendors
import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';

//config
import { ROUTES } from '@routing';


export class RouteGuard extends Component {

  render = () => {
    const { isUserLogged, children, location: { pathname } } = this.props;
    console.log('red', (!isUserLogged && pathname !== '/welcome'))
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