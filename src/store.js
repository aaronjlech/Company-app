import { createStore, compose } from "redux";
import suppliers from './dummy-data.js';
import rootReducer from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

const defaultState = {
   suppliers
}
console.log(rootReducer)
const store = createStore( rootReducer, defaultState,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
