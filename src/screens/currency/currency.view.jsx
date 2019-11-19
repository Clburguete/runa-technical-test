//vendors
import React, { useEffect } from 'react';

//components
import {
  CurrencyButton,
  Header
} from '@components';

export const CurrencyView = (props) => {
  const {
    history,
    fetchExchangeRate,
    exchangeRates
  } = props;

  const currencyId = history.location.pathname.replace('/currency/','');

  const handleClick = currID => {
    history.push(`/currency/${currID}`);
  };

  useEffect(() => {
    fetchExchangeRate(currencyId);
  }, [currencyId])

  return (
    <>
      <Header/>
      <h1>There you go! Take a look at today's exchange rates</h1>
      <h4>Click on any of the other currencies to check their rates! :)</h4>
      <h5>Selected currency: {currencyId.toUpperCase()}</h5>
      <section className='c-grid'>
        <CurrencyButton
          value={1}
          currency={currencyId}/>

        {
          !!exchangeRates &&
          Object.keys(exchangeRates).map((curr,i) => {
            const 
              key = curr,
              value = exchangeRates[key];
            if(key === currencyId) return false;
            return (
              <CurrencyButton
                key={`${i}${curr}`}
                handleClick={() => handleClick(key)}
                value={value}
                currency={key} />
            )
          })
        }
      </section>

    </>
  )
}


