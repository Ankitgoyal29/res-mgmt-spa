import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import logo from './logo.svg';
import './App.css';
import NavMenu from './components/navbar/navbar.component';
import Login from './components/login/login.component';
import Home from './components/home/home.component';
import Hiring from './components/onboarding/hiring.component';
import ApplicationList from './components/onboarding/application-list.component';

const customHistory = createBrowserHistory();


function App() {
  return (
    <div className="App">
      <Router history={customHistory}>
        <div>
          <NavMenu />

          <Switch>
            <Route path="/home" exact > <Home /> </Route>
            <Route path="/hiring" exact > <Hiring /> </Route>
            <Route path="/applications" > <ApplicationList /> </Route>
            <Route path="/login" > <Login /> </Route>
            <Route path="/"> <Home /> </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
