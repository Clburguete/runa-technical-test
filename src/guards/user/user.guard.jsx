//vendors
import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';

//config
import { ROUTES } from './../../config';

export class UserGuard extends Component {
  
  render = () => {
    const { isUserCreated, children, location: {pathname} } = this.props;
    return (
      (!isUserCreated && pathname !== '/welcome') ?
        <Redirect to={ROUTES.default.path}/>
        :
        <>
          {children}
        </>
    )
  }
}