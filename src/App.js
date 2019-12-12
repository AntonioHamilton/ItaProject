import React from 'react';
import Routes from './routes/index'
import GlobalStyle from './styles/global';
import Footer from './components/Footer/index'
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <GlobalStyle/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
