//vendors
import React, { useEffect } from 'react';

export const CurrenciesView = props =>{
  const { fetchSpotPrice } = props;
  useEffect(() => {
    fetchSpotPrice();
  }, [])
  return (
    <>
      <h3>CurrenciesView</h3>
    </>
  )
}