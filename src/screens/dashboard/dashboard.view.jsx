//vendors
import React, { useEffect } from 'react';

//components
import {
  CurrencyButton,
  Row,
  Header,
  Button
} from '@components';

export const DashboardView = (props) => {
  const { 
    userName,
    selectedCurrency,
    spotPrice,
    fetchSpotPrice,
    history
  } = props;

  const handleClick = currId => history.push(`/currency/${currId}`)

  useEffect(() => {
    fetchSpotPrice();
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
          currency={selectedCurrency}/>
      </Row>
    </>
  )
}


