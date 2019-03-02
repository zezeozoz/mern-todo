import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import logo from "../logo.jpeg"

export default class NavbarTodo extends Component {
    render () {
        return (
            <Navbar bg="light" expand="lg">
                <a className='navbar-brand' href="/">
                <img src={logo} width='40' height='30' />
                </a>
                <Navbar.Brand href="/">MERN-Todo List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link>
                        <Link to='/' className='nav-link'>Todos</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/create' className='nav-link'>Create Todo</Link>
                    </Nav.Link>
                </Navbar.Collapse>
          </Navbar>
        )
    }
}