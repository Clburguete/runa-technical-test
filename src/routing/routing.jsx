//vendors
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//config
import { ROUTES } from './../config';
//components
import LazyScreen from './lazy-screen';

export const Routing = () => {

  return (
    <BrowserRouter>
      <Switch>
        {
          Object.keys(ROUTES).map((key,i) => {
            const route = ROUTES[key];
            return (
              <Route
                key={`${i}${key}`}
                path={route.path}
                render={(routeProps) => <LazyScreen {...routeProps} route={key}/>}
                />
            )
          })
        }

        <Redirect from="" to={ROUTES.default.path}/>

      </Switch>
    </BrowserRouter>
  )
}

