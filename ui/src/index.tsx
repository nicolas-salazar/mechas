import React from 'react';
import ReactDOM from 'react-dom';

import { intializeFirebase } from './firebase.config';
import reportWebVitals from './reportWebVitals';

import App from './App';

intializeFirebase();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
