//vendors
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { storeReducer } from './reducers';
import { initialState } from './initial-state';
import { fetchSpotEpic, fetchCurrenciesEpic } from '@services';

const observableMiddleware = createEpicMiddleware();
const store = createStore(storeReducer, initialState, applyMiddleware(observableMiddleware));
const combinedEpics = combineEpics(fetchSpotEpic, fetchCurrenciesEpic)
observableMiddleware.run(combinedEpics);

export { store };