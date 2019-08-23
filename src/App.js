import React from 'react';
import Header from './js/layout/header/Header';
import './scss/customBootstrapTheme.scss'
import Footer from './js/layout/footer/Footer';
import Home from './js/pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
