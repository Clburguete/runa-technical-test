//vendors
import { createStore } from 'redux'

import { storeReducer } from './reducers';
import { initialState } from './initial-state';

export const store = createStore(storeReducer, initialState);