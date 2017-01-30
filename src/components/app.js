import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import * as actionCreators from '../actions/action-creators';
import Main from './main';
import suppliers from '../dummy-data'

function mapStateToProps(state){

   return{
      suppliers: state.suppliers
   }
}

function mapDispatchToProps(dispatch){

   return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
