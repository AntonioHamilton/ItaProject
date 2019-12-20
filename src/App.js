import React from 'react';
import Routes from './routes/index'
import GlobalStyle from './styles/global';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <GlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;
