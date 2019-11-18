//vendors
import React from 'react';

//config
import { ROUTES } from './../../config';

export const DashboardView = (props) => {

  return (
    <>
      <h1>Welcome, {props.userName}</h1>
      <h3> Please use the links below to navigate through the project.</h3>
      <section>
        Today's BTC market price is: {props.spotPrice}
      </section>
      <section>
        {
          Object.keys(ROUTES).map((key, i) => {
            const route = ROUTES[key];
            return (
              <NavButton
                key={`${i}${key}`}
                text={key}
                path={route.path}
                handleClick={history.push}
              />
            )
          })
        }
      </section>
    </>
  )
}
