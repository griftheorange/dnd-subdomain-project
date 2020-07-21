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
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/alex'>
            <PlayerPage title={"alex_sheet"} iframe_url="https://docs.google.com/spreadsheets/d/1dlk8Hb-dK1Qexx1TBc76pqIcbfSf2HnQCbU_aByW0_k/edit?usp=sharing&amp;single=true&amp;widget=true&amp;headers=false"/>
          </Route>
          <Route path='/julia'>
            <PlayerPage title={"julia_sheet"} iframe_url="https://docs.google.com/spreadsheets/d/11d3C94ShvT9PF8N1T5he-9FWvTrHQp9cS4KHGTHYouA/edit?usp=sharing&amp;single=true&amp;widget=true&amp;headers=false"/>
          </Route>
          <Route path='/kyle'>
            <PlayerPage title={"kyle_sheet"} iframe_url="https://docs.google.com/spreadsheets/d/1dlk8Hb-dK1Qexx1TBc76pqIcbfSf2HnQCbU_aByW0_k/edit?usp=sharing&amp;single=true&amp;widget=true&amp;headers=false"/>
          </Route>
          <Route path='/grant'>
            <PlayerPage title={"grant_sheet"} iframe_url="https://docs.google.com/spreadsheets/d/11d3C94ShvT9PF8N1T5he-9FWvTrHQp9cS4KHGTHYouA/edit?usp=sharing&amp;single=true&amp;widget=true&amp;headers=false"/>
          </Route>
          <Route path='/charles'>
            <PlayerPage title={"charles_sheet"} iframe_url="https://docs.google.com/spreadsheets/d/11d3C94ShvT9PF8N1T5he-9FWvTrHQp9cS4KHGTHYouA/edit?usp=sharing&amp;single=true&amp;widget=true&amp;headers=false"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
