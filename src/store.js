import { createStore, compose } from "redux";
import suppliers from './dummy-data.js';
import rootReducer from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

const defaultState = {
   suppliers
}
const store = createStore( rootReducer, defaultState);

console.log(store.getState(), 'hello')
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
