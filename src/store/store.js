//vendors
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import {
  currencyReducer,
  userFormReducer
} from './ducks';

import { initialState } from './initial-state';


const { fetchCurrenciesEpic, fetchSpotEpic, fetchExchangeEpic } = currencyReducer;
const 
  observableMiddleware = createEpicMiddleware(),
  rootEpics = combineEpics(fetchCurrenciesEpic, fetchSpotEpic, fetchExchangeEpic),
  rootReducer = combineReducers({ currency : currencyReducer.default, userForm: userFormReducer.default});

console.log('root', rootReducer)
const store = createStore(rootReducer, initialState, applyMiddleware(observableMiddleware));
observableMiddleware.run(rootEpics);

export { store };