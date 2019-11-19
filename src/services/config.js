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

const SERVICES = {
  GET_CURRENCIES: {
    endpoint: 'currencies'
  },
  GET_EXCHANGE_RATES: {
    endpoint: 'exchange-rates?currency='
  },
  GET_BUY_PRICE: {
    endpoint: 'prices/',
    action: '/buy'
  },
  GET_SELL_PRICE: {
    endpoint: 'prices/',
    action: '/sell'
  },
  GET_SPOT_PRICE: {
    endpoint: 'prices/',
    action: 'spot'
  }
}

const mapServices = servicesArr => {
  return Object.keys(servicesArr).map(key => {
    const serviceConfig = {
      ...servicesArr[key],
      endpoint: `${host}${servicesArr[key].endpoint}`,
      options: defaultOptions
    }
    return { ...serviceConfig, key: key };
  }).reduce((acc, item) => {
    acc[item.key] = item;
    return acc
  }, {})
}


export default mapServices(SERVICES);

