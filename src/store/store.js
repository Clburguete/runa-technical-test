//vendors
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import { storeReducer } from './reducers';
import { initialState } from './initial-state';
import { fetchEpic } from './../services';

const observableMiddleware = createEpicMiddleware();

const store = createStore(storeReducer, initialState, applyMiddleware(observableMiddleware));

observableMiddleware.run(fetchEpic);

export { store };