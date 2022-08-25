import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import Navbar from './components/Navbar'
import ValTitle from './components/ValTitle';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Agents from './pages/Agents';
import Weapons from './pages/Weapons';
import Maps from './pages/Maps';
import Resources from './pages/Resources';
import TopPicks from './pages/TopPicks';



function App() {

  return (
    <div className="App">
      <Router>
        <ValTitle />
        <Navbar />
        <Box className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/agents">
            <Agents />
          </Route>
          <Route path="/weapons">
            <Weapons />
          </Route>
          <Route path="/maps">
            <Maps />
          </Route>
          <Route path="/top-picks">
            <TopPicks />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </Box>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
