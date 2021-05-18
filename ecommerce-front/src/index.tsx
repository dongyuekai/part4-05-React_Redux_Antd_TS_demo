import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import Routes from "./Routes"
import { Provider } from 'react-redux'
import store, { history } from './store'
import './style.css'
import AnotherStore from './anotherStore';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AnotherStore>
        <Routes />
      </AnotherStore>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
