import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {connect} from 'react-redux'

import HomePage from './Components/HomePage.js'
import Navbar from './Components/Navbar.js'
import PlayerPage from './Components/PlayerPage.js'
import './CSS/App.css'

function App(props) {

  useEffect(() => {
    fetch("http://api.griffinpoole.com/index.json")
    .then(r => r.json())
    .then((r) => {
      props.setAppData(r)
    })
  }, [])

  if(props.appData){
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
    )
  } else {
    return null
  }
}

function mapState(state){
  return {
    appData: state.appData
  }
}

function mapDispatch(dispatch){
  return {
    setAppData: (value) => {
      dispatch({
        type: "SET_APP_DATA",
        value: value
      })
    }
  }
}

export default connect(mapState, mapDispatch)(App);
