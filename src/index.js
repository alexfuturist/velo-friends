import {store} from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//функция отрисовки (перерисовки) UI
let renderEntireTree = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
      
      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      reportWebVitals();
}

//первичная отрисовка
renderEntireTree(store.getState());

//подписка на события изменения
//переписывает метод _renderEntireTree() в state
store.subscribe(renderEntireTree);
