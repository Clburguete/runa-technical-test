import {  SERVICES } from '@services';

const { GET_CURRENCIES } = SERVICES;

async function fetchCurrencies() {
  const response = await fetch(`${GET_CURRENCIES.endpoint}`);
  const dataJson = await response.json();
  return {
    type: 'FETCH_CURRENCIES_SUCCESS',
    currencies: dataJson.data
  };
}

export {
  fetchCurrencies
}