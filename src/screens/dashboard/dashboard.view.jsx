//vendors
import React from 'react';

//config
import { ROUTES } from './../../config';

//components
import { NavButton } from './../../components';

export const DashboardView = (props) => {
  const { userName, spotPrice } = props;
  return (
    <>
      <h1>Welcome, {userName}</h1>
      <h3> Please use the links below to navigate through the project.</h3>
      <section>
        Today's BTC market price is: {spotPrice}
      </section>
      <section>
        {
          Object.keys(ROUTES).map((key, i) => {
            const route = ROUTES[key];
            if(key === 'default') return;
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
