import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';
import JokeView from './components/JokeView/JokeView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';
import Navbar from './components/navbar/navbar';
import StarterPage from './components/StarterPage/StarterPage';
import FootballTracker from './components/FootballTracker/FootballTracker';
import ReactDOM from "react-dom";


  
 function App() {

  return(
    <div className='App'>
      <Router>
        <Navbar fixed="top"/>    
         <Switch>
           <Route path="/JokeView" component={JokeView}>
             <JokeView/>
           </Route>
           <Route path="/FootballTracker" component={FootballTracker}>
             <FootballTracker/>
           </Route>
           <Route component={StarterPage}>
             <StarterPage/>
           </Route>
         </Switch>
      </Router>
    </div>
  );     
} 


export default App;
