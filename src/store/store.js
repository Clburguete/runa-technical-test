//vendors
import { createStore } from 'redux'

import { userName } from './reducers';
import { initialState } from './initial-state';

export const store = createStore(userName, initialState);