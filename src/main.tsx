import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './app/index.scss';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { store } from './app/redux/redux-store';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);