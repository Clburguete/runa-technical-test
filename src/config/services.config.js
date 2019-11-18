const defaultOptions = {
  method: 'GET',
  mode: 'no-cors',
  cache: 'no-cache',
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrer: 'no-referrer',
}

const host = 'https://api.coinbase.com/v2/';

let SERVICES = {
  GET_CURRENCIES: {
    endpoint: 'currencies'
  },
  GET_EXCHANGE_RATES: {
    endpoint: 'exchange-rates/currency='
  },
  GET_BUY_PRICE: {
    endpoint: 'prices/',
    action: '/buy'
  },
  GET_SELL_PRICE: {
    endpoint: 'prices/',
    action: '/sell'
  },
  GET_MARKER_VALUE: {
    endpoint: 'prices/',
    action: '/spot'
  }
}

SERVICES = Object.keys(SERVICES).map(key => {
  const serviceConfig = SERVICES[key];
  serviceConfig.endpoint = `${host}${serviceConfig.endpoint}`
  return serviceConfig;
})

export default SERVICES;

