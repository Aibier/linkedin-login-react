import React, { Component } from 'react';

import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LinkedInPage from './pages/LinkedInPage';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BrowserRouter>
            <Switch >
              <Route exact path="/linkedin" component={LinkedInPopUp} />
              <Route path="/" component={LinkedInPage} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
