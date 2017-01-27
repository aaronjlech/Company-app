import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import addNewCompany from './add-supplier'
import removeCompany from './remove-supplier'


const rootReducer = combineReducers({ removeCompany, addNewCompany, routing: routerReducer});


export default rootReducer;
