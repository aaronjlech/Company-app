import { createStore, compose } from "redux";
import suppliers from './data';
import rootReducer from './reducers/index';

const defaultState = {
   suppliers
}
const store = createStore( rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
