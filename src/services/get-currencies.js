import {  SERVICES } from '@services';

const { GET_CURRENCIES } = SERVICES;
console.log(SERVICES)
async function fetchCurrencies() {
  console.log('adasd', GET_CURRENCIES)
  console.log('endpoint',GET_CURRENCIES.endpoint)
  const response = await fetch(`${GET_CURRENCIES.endpoint}`);
  console.log(response);
  const dataJson = await response.json();
  console.log(dataJson);
  return {
    type: 'FETCH_CURRENCIES_SUCCESS',
    currencies: ['213123']
  };
}

export {
  fetchCurrencies
}