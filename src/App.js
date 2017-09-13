import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from   './components/Footer';
import Message from './components/Message';

class App extends Component {
  render() {
    return (


        <Router>
          <div className="todo-app">
            <Message className="" />
            <TodoForm />
              <Route path='/:filter?' render={({match}) => (
                    <TodoList filter={match.params.filter} />
                  )} />
            <Footer/>
          </div>
        </Router>

    );
  }
}

export default App;
