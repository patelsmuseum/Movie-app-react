import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import movies from './reducers';

import {createStore} from 'redux'
const store = createStore(movies);

console.log(store.getState());




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


