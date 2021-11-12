import { Link, Route, Router, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import home from './pages/home';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact>
            <home />
            </Route>
        </Switch>
    </Router>
    
  );
};

export default App;
