import { SERVICES } from '@services';

const { GET_SPOT_PRICE } = SERVICES;

async function fetchSpotPrice () {
  const
    response = await fetch(`${GET_SPOT_PRICE.endpoint}${GET_SPOT_PRICE.action}`),
    dataJson = await response.json();
    return {
        type: 'FETCH_SPOT_PRICE_SUCCESS',
        price: dataJson.data.amount
    };
}

export {
  fetchSpotPrice
}