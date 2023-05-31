import { legacy_createStore as createStore, combineReducers } from 'redux';
import initialState from './initialState';

const subreducers = {
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;