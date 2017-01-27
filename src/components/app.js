// import { bindActionCreators } from 'redux';
// import { connect} from 'react-redux';
// import * as actionCreators from '../actions/action-creators';
// import Main from './main';
//
//
// function mapStateToProps(state){
//
//    return{
//       suppliers: state.suppliers
//    }
// }
//
//
// function mapDispatchToProps(dispatch){
//
//
//    return bindActionCreators(actionCreators, dispatch);
// }
//
//
// const App = connect(mapStateToProps, mapDispatchToProps)(Main);
//
//
import React from "react";


const App = React.createClass({


   render(){

      return(
         <div className="hello">
            <h1>WAHTUP</h1>
         </div>
      )
   }
})
export default App;
