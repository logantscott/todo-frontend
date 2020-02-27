import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import TodoAppLogin from './TodoAppLogin';
import { TodoApp } from './TodoApp.js';
import { PessimisticTodoApp } from './PessimisticTodoApp.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

function App() {
  return (
    <Router>
        <div className="App">
            <header>
                <Link to="/">Home</Link><br />
            </header>
            
            <Switch>
                <Route exact path="/" render={() => 
                    isLoggedIn() 
                        ? <TodoApp />
                        : <Redirect to='login' />
                }/>
                {/* <Route exact path='/' component={TodoApp} /> */}
                <Route exact path='/login' component={TodoAppLogin} />
                <Route exact path="/pessimistic" component={PessimisticTodoApp} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
