import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export default class Todo extends Component {
    render () {
        return (
        <tr>
            <td className={this.props.todo.todo_completed ? 'Completed' : ''}>{this.props.todo.todo_description}</td>
            <td className={this.props.todo.todo_completed ? 'Completed' : ''}>{this.props.todo.todo_responsible}</td>
            <td className={this.props.todo.todo_completed ? 'Completed' : ''}>{this.props.todo.todo_priority}</td>
            <td>
                <Link to={'/edit/'+this.props.todo._id}>
                    Edit
                </Link>
                <Button style={{marginLeft: '16px'}} onClick={this.props.handleDelete} id={this.props.todo._id}>Delete</Button>
            </td>
        </tr>)
    }
}