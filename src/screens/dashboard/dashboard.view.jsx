//vendors
import React, { useEffect } from 'react';

//components
import {
  CurrencyButton,
  Row,
  Header,
  Button
} from '@components';

import { initialState } from '@store';

export const DashboardView = (props) => {
  const { 
    userName,
    selectedCurrency,
    spotPrice,
    buyPrice,
    fetchSpotPrice,
    fetchBuyPrice,
    history
  } = props;

  console.log(buyPrice)
  const handleClick = currId => history.push(`/currency/${currId}`)

  useEffect(() => {
    fetchSpotPrice();
    fetchBuyPrice(selectedCurrency);
  }, [selectedCurrency])

  return (
    <>
      <Header/>
      <h1>Welcome, {userName}</h1>
      <h3> Please use the links above to navigate through the project.</h3>
      <Row>
        <h5>Today's Bitcoin market price</h5>
        <CurrencyButton
          handleClick={() => handleClick(selectedCurrency)}
          value={spotPrice}
          currency={'USD'}/>
        <CurrencyButton
          // handleClick={() => handleClick(selectedCurrency)}
          value={buyPrice}
          currency={selectedCurrency} />
      </Row>
    </>
  )
}


