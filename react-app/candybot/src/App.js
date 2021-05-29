import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Graph from './pages/Graph/Graph';
import { Navbar, Footer } from './components';

function App() {
  return (
      <Router>
        <GlobalStyle />
        <Navbar />
        <Home />
        <Products />
        <Graph />
        <Footer />
      </Router>
  );
}

export default App;
