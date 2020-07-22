import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomePage from './Components/HomePage.js'
import Navbar from './Components/Navbar.js'
import PlayerPage from './Components/PlayerPage.js'
import './CSS/App.css'

function App() {

  return (
    <Router>
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/player/:player_name' component={PlayerPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
