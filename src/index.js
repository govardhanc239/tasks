import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './components/POC/react-config/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,

);

reportWebVitals();
