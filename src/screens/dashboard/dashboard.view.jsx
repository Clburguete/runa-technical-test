//vendors
import React, { useEffect } from 'react';

//config
import { ROUTES } from './../../config';

//components
import {
  NavButton,
  CurrencyButton,
  Header
} from './../../components';

export const DashboardView = (props) => {
  const { 
    userName,
    selectedCurrency,
    spotPrice,
    history,
    fetchSpotPrice,
    logout
  } = props;

  useEffect(() => {
    fetchSpotPrice();
  }, [])

  return (
    <>
      <Header 
        logout={logout} 
        history={history} 
        userName={userName}/>
      <h1>Welcome, {userName}</h1>
      <h3> Please use the links above to navigate through the project.</h3>
      <section>
        <h5>Today's Bitcoin market price</h5>
        <CurrencyButton
        value={spotPrice}
          currency={selectedCurrency}/>
      </section>

    </>
  )
}
