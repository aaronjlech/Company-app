import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import addNewCompany from './add-supplier'
import removeCompany from './remove-supplier'


const rootReducer = combineReducers({ suppliers: removeCompany, routing: routerReducer});


export default rootReducer;
