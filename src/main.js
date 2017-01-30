import React from 'react';
import App from './components/app.js';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';
import SingleView from './components/single-view';


const Root = (
   <Provider store={store}>
      <Router history={hashHistory}>
         <Route path="/" component={App}>
            </Route>
            <Route path='/view/:singleId' component={SingleView}>

         </Route>
      </Router>
   </Provider>

)


ReactDOM.render(Root, document.getElementById('app-container'));
