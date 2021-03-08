import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';
import App from './App';

import './index.scss';


//функция отрисовки (перерисовки) UI
let renderEntireTree = ()=> {
    ReactDOM.render(
        <React.StrictMode>
          <HashRouter>
            <Provider store={store}>
              <App/>
            </Provider>
          </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
      
      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      reportWebVitals();
}

//первичная отрисовка
renderEntireTree();

//подписка на события изменения
//переписывает метод _renderEntireTree() в state
store.subscribe( () => {
  renderEntireTree();
});
