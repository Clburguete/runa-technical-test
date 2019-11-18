//vendors
import React, { useEffect } from 'react';

export const CurrenciesView = props =>{
  const { fetchCurrencies } = props;
  console.log(props);
  useEffect(() => {
    fetchCurrencies();
  }, [])

  return (
    <>
      <h3>CurrenciesView</h3>
    </>
  )
}