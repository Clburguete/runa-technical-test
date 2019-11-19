//vendors
import { filter, mergeMap, catchError } from 'rxjs/operators';

//services
import { fetchSpotPrice } from './get-spot';
import { fetchCurrencies } from './get-currencies';
import { fetchExchangeRate } from './get-exchange';
import { fetchBuyPrice } from './get-buy-price';

const fetchSpotEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === "FETCH_SPOT_PRICE"),
    mergeMap( fetchSpotPrice ),
    catchError(err => {throw new Error()})
  )
}

const fetchCurrenciesEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === "FETCH_CURRENCIES"),
    mergeMap( fetchCurrencies ),
    catchError(err => { throw new Error() })
  )
}

const fetchExchangeEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === "FETCH_EXCHANGE_RATE"),
    mergeMap( fetchExchangeRate ),
    catchError(err => {throw new Error()})
  )
}

const fetchBuyEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === "FETCH_BUY"),
    mergeMap(fetchBuyPrice),
    catchError(err => { throw new Error() })
  )
}

export {
  fetchSpotEpic,
  fetchCurrenciesEpic,
  fetchExchangeEpic
};