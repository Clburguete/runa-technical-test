import { SERVICES } from '@services';

const { GET_BUY_PRICE } = SERVICES;

async function fetchBuyPrice (exchangeCurr) {
  const response = await fetch(`${GET_BUY_PRICE.endpoint}BTC-${exchangeCurr}${GET_BUY_PRICE.action}`);
  const dataJson = await response.json();
  return {
    type: 'FETCH_BUY_PRICE_SUCCESS',
    price: dataJson.data.amount
  };
}

export {
  fetchBuyPrice
}