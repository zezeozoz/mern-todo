import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';
import NavbarTodo from './components/navbar-todo.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <NavbarTodo />
          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id'component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
        
      </Router>
    );
  }
}

export default App;
