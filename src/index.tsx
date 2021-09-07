import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import {store} from "./redux/store";
import {Provider} from "react-redux";


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
