import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { TodoApp } from './TodoApp.js';

function App() {
  return (
    <Router>
        <div className="App">
            <header>
                <Link to="/">Home</Link><br />

            </header>
            <Switch>
                <Route exact path="/" component={TodoApp} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
