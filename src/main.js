import React from 'react';
import App from './components/app.js';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

console.log("wahhtt", store)

const Root = (
   <Provider store={store}>
      <Router history={history}>
         <Route path="/" component={App}>
         </Route>
      </Router>
   </Provider>

)


ReactDOM.render(Root, document.getElementById('app-container'));
