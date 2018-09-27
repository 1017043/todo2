// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combineReducers from './Reducer.js';

const store = createStore(combineReducers);

export default store;
