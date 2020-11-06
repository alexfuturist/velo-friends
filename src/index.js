import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let postsData = [
  {
    id: 1,
    message:"Привіт, хто хоче покататись?"
  },
  {
    id: 2,
    message:"Починаю нову програму! Поїхали!"
  }
];


let dialogsData = [
  {
    id: 1,
    name: 'Михайло'
  },
  {
    id: 2,
    name: 'Ізабела'
  },
  {
    id: 3,
    name: 'Софія'
  }
];


let messagesData = [
  {
    id: 1,
    name: 'Ізабела',
    messagesText: 'Привіт! Вже замінив колесо?'
  },
  {
    id: 2,
    name: 'Я',
    messagesText: 'Привіт. Так вже відремонтував і встановив нові катафоти!'
  },
  {
    id: 3,
    name: 'Ізабела',
    messagesText: 'Тоді завтра на 10:30 їдемо 20км по маршруту Б.'
  },
  {
    id: 4,
    name: 'Я',
    messagesText: 'ОК'
  }
];


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
