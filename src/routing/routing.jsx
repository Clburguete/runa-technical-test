//vendors
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//components
import LazyScreen from './lazy-screen';

export const Routing = props => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/welcome"
          render={() => <LazyScreen route="welcome"/>}
        />

        <Route
          path='/random'
          render={() => <LazyScreen route='random'/>}
        />

        <Redirect from="" to="/welcome"/>

      </Switch>
    </BrowserRouter>
  )
}

