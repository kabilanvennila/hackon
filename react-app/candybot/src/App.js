import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Graph from './pages/Graph/Graph';
import { Navbar, Footer } from './components';
// import { Candy } from './components'
import { useEffect ,useRef} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
// import onUserEvent from '@alan-ai/alan-sdk-web';



function App() {

  useEffect(() => {
    alanBtn({
      key: '4a59123c3ca3b317b8ced81dcc5ff4452e956eca572e1d8b807a3e2338fdd0dc/stage',
      // key: '4d292cf043b0a2ea4d0bf347580da6fd2e956eca572e1d8b807a3e2338fdd0dc/prod',
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
          <h2>Candy</h2>
        </div>
        <Home />
        {/* <Candy /> */}
        <Products />
        <Graph />
        <Footer />
      </Router>
  );
}

export default App;
