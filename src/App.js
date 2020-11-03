import './components/Common/_normalize.css'
import './components/Common/_nullstyle.css'
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
