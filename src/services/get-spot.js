import { SERVICES } from './../config';

const { GET_SPOT_PRICE, GET_CURRENCIES } = SERVICES;

async function fetchSpotPrice () {
  const
    response = await fetch(`${GET_SPOT_PRICE.endpoint}${GET_SPOT_PRICE.action}`),
    dataJson = await response.json();
    return {
        type: 'FETCH_SPOT_PRICE_SUCCESS',
        price: dataJson.data.amount
    };
}

async function fetchCurrencies() {
  const
    response = await fetch(`${GET_CURRENCIES.endpoint}${GET_CURRENCIES.action}`),
    dataJson = await response.json();
    console.log(dataJson);
  return {
    type: 'FETCH_CURRENCIES_SUCCESS',
    currencies: dataJson.data
  };
}

export {
  fetchSpotPrice,
  fetchCurrencies
}