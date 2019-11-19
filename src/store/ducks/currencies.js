//vendors
import { filter, mergeMap, catchError } from 'rxjs/operators';

import { initialState } from "./../initial-state";
import { fetchSpotPrice, fetchCurrencies, fetchExchangeRate, fetchBuyPrice } from '@services';

const 
  FETCH_SPOT_PRICE = "FETCH_SPOT_PRICE",
  FETCH_SPOT_PRICE_SUCCESS ="FETCH_SPOT_PRICE_SUCCESS",
  FETCH_CURRENCIES = "FETCH_CURRENCIES",
  FETCH_CURRENCIES_SUCCESS = "FETCH_CURRENCIES_SUCCESS",
  FETCH_EXCHANGE_RATE = "FETCH_EXCHANGE_RATE",
  FETCH_EXCHANGE_RATE_SUCCESS = "FETCH_EXCHANGE_RATE_SUCCESS",
  SELECT_DEFAULT_CURRENCY = "SELECT_DEFAULT_CURRENCY",
  FETCH_BUY_PRICE = "FETCH_BUY_PRICE",
  FETCH_BUY_PRICE_SUCCESS = "FETCH_BUY_PRICE_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR";

export const getSpotPrice = () => ({
  type: FETCH_SPOT_PRICE
})

export const getCurrencies = () => ({
  type: FETCH_CURRENCIES
})

export const getBuyPrice = currencyId => ({
  type: FETCH_BUY_PRICE,
  currencyId
})

export const setDefaultCurr = selectedCurrency => ({
  type: SELECT_DEFAULT_CURRENCY,
  selectedCurrency
})

export const getExchangeRates = currencyId => ({
  type: FETCH_EXCHANGE_RATE,
  currencyId
})

export const getError = () => ({
  type: FETCH_ERROR
})

export const fetchSpotEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === FETCH_SPOT_PRICE),
    mergeMap(fetchSpotPrice),
    catchError(err => { throw new Error() })
  )
}

export const fetchCurrenciesEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === FETCH_CURRENCIES),
    mergeMap(fetchCurrencies),
    catchError(err => { throw new Error() })
  )
}

export const fetchExchangeEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === FETCH_EXCHANGE_RATE),
    mergeMap(action => fetchExchangeRate(action.currencyId)),
    catchError(err => { throw new Error() })
  )
}

export const fetchBuyEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === FETCH_BUY_PRICE),
    mergeMap(action => fetchBuyPrice(action.currencyId)),
    catchError(err => { throw new Error() })
  )
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SPOT_PRICE_SUCCESS:
      return {...state, spotPrice : action.price};
    case FETCH_CURRENCIES_SUCCESS:
      return {...state, currencies : action.currencies};
    case FETCH_EXCHANGE_RATE_SUCCESS:
      return {...state, exchangeRates: action.rate};
    case SELECT_DEFAULT_CURRENCY:
      return {...state, selectedCurrency : action.selectedCurrency}
    case FETCH_BUY_PRICE_SUCCESS:
      return {...state, buyPrice: action.price }
    case FETCH_ERROR:
      throw new Error();
      return {...state};
    default:
      return state;
  }
}

export default reducer;
export {
  fetchSpotPrice,
  fetchCurrencies,
  fetchExchangeRate
}