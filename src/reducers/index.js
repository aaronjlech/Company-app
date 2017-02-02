import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import suppliers from './suppliers';


const rootReducer = combineReducers({ suppliers, routing: routerReducer });


export default rootReducer;
