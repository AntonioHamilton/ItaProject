import React from 'react';
import Routes from './routes/index'
import GlobalStyle from './styles/global';
import Footer from './components/Footer/index'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
