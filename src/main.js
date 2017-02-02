import React from 'react';
import App from './components/app.js';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import SingleView from './components/single-view';
import AddNewForm from './components/supplier-form';
import MainSuppliers from './components/supplier-container';

const Main_Router = (
   <Provider store={store}>
      <Router history={hashHistory}>
         <Route path="/" component={App}>
            <IndexRoute component={MainSuppliers}></IndexRoute>
            <Route path='/view/:singleId' component={SingleView}></Route>
            <Route path='/add-new' component={AddNewForm}></Route>
         </Route>
      </Router>
   </Provider>

)


ReactDOM.render(Main_Router, document.getElementById('app-container'));
