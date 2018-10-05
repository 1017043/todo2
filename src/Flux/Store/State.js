// redux
import { createStore } from 'redux';

import combineReducers from './Reducer.js';

const store = createStore(combineReducers);
console.log(store.getState());

export default store;
