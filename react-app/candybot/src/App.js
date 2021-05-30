import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Graph from './pages/Graph/Graph';
import { Navbar, Footer } from './components';
// import { Candy } from './components'
import { useEffect , useRef } from 'react';
import { Button } from './globalStyles';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

function App() {

  useEffect(() => {
    alanBtn({
      //Testing key 
      // key: '4a59123c3ca3b317b8ced81dcc5ff4452e956eca572e1d8b807a3e2338fdd0dc/stage',
      key: '4a59123c3ca3b317b8ced81dcc5ff4452e956eca572e1d8b807a3e2338fdd0dc/prod',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          //call client code that will react to the received command
        }
      }
    });
  }, []);


  return (
      <Router>
        <GlobalStyle />
        {/* <Navbar /> */}
        <div style={{fontSize:'2rem',backgroundColor:'#101522',color:'white',textAlign:'center',paddingTop:'30px' }}>
          <h2>Candy Bot</h2>
        </div>
        <Home />
        {/* <Button className="main-btn">Our API</Button> */}
        {/* <Candy /> */}
        <Products />
        <Graph />
        <div className="button-container">
          <Button className="main-btn">
                <a href="https://candybotapi.pythonanywhere.com/api/Apis/" target="_blank">
            Our API
          </a>
          </Button>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
