import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';

export default function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/sign-up" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}
