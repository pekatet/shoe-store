import React from 'react';
import ReactDOM from 'react-dom';
import storeRT from './Slices/index';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRT}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);