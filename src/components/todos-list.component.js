import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './TodoListStyle.css'
import Todo from './todos'

import Table from 'react-bootstrap/Table';

export default class TodoList extends Component {
    state = {
        todos: []
    }

    componentDidMount = () => {
        axios.get('http://localhost:4000/todos')
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate = () => {
        axios.get('http://localhost:4000/todos')
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleDelete = (e) => {
        axios.delete('http://localhost:4000/delete/'+ e.target.id)
            .then(response =>{
                console.log(e.target.id)
            })
            .catch(error => {
                console.log(e.target.id)
            })
    }

    todoList = () => {
        return this.state.todos.map((currentTodo, i) => {
            return <Todo 
                        todo={currentTodo}
                        handleDelete={this.handleDelete}
                        key={i}
                        />
        })
    }

    render () {
        
        return (
            <div>
                <h3>Todo List</h3>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </Table>
            </div>
        )
    }
}