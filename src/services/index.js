import SERVICES from './config';
export { fetchCurrencies } from './get-currencies';
export { fetchExchangeRate } from './get-exchange';
export { fetchSpotPrice } from './get-spot';

export { fetchSpotEpic, fetchCurrenciesEpic, fetchExchangeEpic } from './epics';
export { SERVICES };