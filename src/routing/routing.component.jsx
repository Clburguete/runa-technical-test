//vendors
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//routing utils
import  {  ROUTES, LazyScreen } from '@routing';
//guards
import { RouteGuard } from '@guards';

export const Routing = ({ currRoute }) => {

  return (
    <BrowserRouter>
      <RouteGuard>
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
      </RouteGuard>
    </BrowserRouter>
  )
}

