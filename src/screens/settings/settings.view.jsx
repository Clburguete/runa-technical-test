//vendors
import React, { useEffect } from 'react';

//components
import { Header, CurrencyButton } from '@components';

//styles
import '@styles/grids.css'

export const SettingsView = props =>{
  const {  selectedCurrency, fetchCurrencies, currencies, history, userName, selectDefaultCurr } = props;
  useEffect(() => {
    !currencies.length && fetchCurrencies();
  }, [])

  const navToDetail = id => {
    history.push(`/currency/${id}`);
  }

  const _selectDefaultCurr = currencyID => {
    selectDefaultCurr(currencyID);
    navToDetail(currencyID);
  }
  return (
    <>
      <Header/>
      <h1>Available currencies</h1>

      <h2>Click on any of the buttons to change your default currency and see their exchange rates</h2>
      <h4>{userName.toUpperCase()}, your current default currency is {selectedCurrency}</h4>

      {
        currencies.length &&
        <section className='c-grid'>
          {
            currencies.map((curr,i) => (
            <CurrencyButton
              additionalClass='c-currency--small'
              handleClick={() => _selectDefaultCurr(curr.id)}
              currency={curr.name}
              key={`${i}-${curr.id}`}/>
            ))
          }
        </section>
      }
    </>
  )
}