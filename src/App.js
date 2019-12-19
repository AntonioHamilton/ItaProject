import React from 'react';
import Routes from './routes/index'
import GlobalStyle from './styles/global';
import MenuHome from './components/MenuHome';

function App() {
  return (
    <div className="App">
      <MenuHome/>
      <GlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;
