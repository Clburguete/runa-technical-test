import { SERVICES } from '@services';

const { GET_EXCHANGE_RATES } = SERVICES;

async function fetchExchangeRate(exchangeCurr) {
  const response = await fetch(`${GET_EXCHANGE_RATES.endpoint}${exchangeCurr}`);
  const dataJson = await response.json();

  return {
    type: 'FETCH_EXCHANGE_RATE_SUCCESS',
    rate: dataJson.data.rates
  };
}

export {
  fetchExchangeRate
}