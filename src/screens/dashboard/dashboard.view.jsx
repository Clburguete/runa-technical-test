//vendors
import React, { useEffect } from 'react';

//components
import {
  CurrencyButton,
  Row,
  Header
} from '@components';

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
        <h6>Click to check USD exchange rates.</h6>
        <CurrencyButton
          handleClick={() => handleClick(selectedCurrency)}
          value={spotPrice}
          currency={'USD'}/>
        <h5>This is the current buy price for your selected currency</h5>
        <CurrencyButton
          additionalClass='--no-hover'
          // handleClick={() => handleClick(selectedCurrency)}
          value={buyPrice}
          currency={selectedCurrency} />
      </Row>
    </>
  )
}


