import { createStore, compose } from "redux";
import suppliers from './data';
import rootReducer from './reducers/index';

const defaultState = {
   suppliers
}
console.log(rootReducer)
const store = createStore( rootReducer, defaultState,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store)


export default store;
