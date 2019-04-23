import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import HomePage from '../components/home'
import AboutPage from '../components/about'
import LoginPage from '../components/login'
import RegisterPage from '../components/register'
import TermsAndConditionsPage from '../components/terms-and-conditions'
import PrivacyPolicyPage from '../components/privacy-policy'
import NotFoundPage from '../components/not-found'
import './style.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="base">
          <header>
            <h1>React-Express Fullstack Boilerplate</h1>
              <Link to='/'>Home</Link>&nbsp;
              <Link to='/about'>About</Link>&nbsp;
              <Link to='/login'>Login</Link>&nbsp;
              <Link to='/register'>Register</Link>&nbsp;
              <Link to='/terms-and-conditions'>Terms and Conditions</Link>&nbsp;
              <Link to='/privacy-policy'>Privacy Policy</Link>&nbsp;
          </header>
          <br /><hr />
          <div className="container">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/terms-and-conditions" component={TermsAndConditionsPage} />
              <Route path="/privacy-policy" component={PrivacyPolicyPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <footer>
            <br /><hr />
            Abhijeet (c) 2018
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}

export default App