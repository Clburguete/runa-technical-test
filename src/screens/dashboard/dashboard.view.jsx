//vendors
import React, { useEffect } from 'react';

//config
import { ROUTES } from './../../config';

//components
import {
  NavButton,
  CurrencyButton
} from './../../components';

export const DashboardView = (props) => {
  const { userName, selectedCurrency, spotPrice, history, fetchSpotPrice } = props;

  useEffect(() => {
    fetchSpotPrice();
  }, [])

  return (
    <>
      <h1>Welcome, {userName}</h1>
      <h3> Please use the links below to navigate through the project.</h3>
      <section>
        <h5>Today's Bitcoin market price</h5>
        <CurrencyButton
        value={spotPrice}
          currency={selectedCurrency}/>
      </section>
      <section>
        {
          Object.keys(ROUTES).map((key, i) => {
            const route = ROUTES[key];
            if(key === 'default' || key === 'welcome') return;
            return (
              <NavButton
                key={`${i}${key}`}
                text={key}
                path={route.path}
                handleClick={() => history.push(route.path)}
              />
            )
          })
        }
      </section>
    </>
  )
}
