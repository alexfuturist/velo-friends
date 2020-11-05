import './components/Common/_normalize.css'
import './components/Common/_nullstyle.css'
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
