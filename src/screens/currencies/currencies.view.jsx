//vendors
import React, { useEffect } from 'react';

//components
import { Header, CurrencyButton } from '@components';

//styles
import '@styles/grids.css'

export const CurrenciesView = props =>{
  const { fetchCurrencies, currencies, logout, history, userName } = props;
  useEffect(() => {
    fetchCurrencies();
  }, [])

  return (
    <>
      <Header 
        logout={logout} 
        history={history}
        userName={userName}/>
      <h1>CurrenciesView</h1>
      {
        currencies.length &&
        <section className='c-grid'>
          {
            currencies.map((curr,i) => (
            <CurrencyButton
              currency={curr.name}
              key={`${i}-${curr.id}`}/>
            ))
          }
        </section>
      }
    </>
  )
}