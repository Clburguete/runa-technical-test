//vendors
import React, { useEffect } from 'react';

import { Header } from '@components';

export const CurrenciesView = props =>{
  const { fetchCurrencies, logout, history, userName } = props;
  console.log(props);
  useEffect(() => {
    fetchCurrencies();
  }, [])

  return (
    <>
      <Header 
        logout={logout} 
        history={history}
        userName={userName}/>
      <h3>CurrenciesView</h3>
    </>
  )
}