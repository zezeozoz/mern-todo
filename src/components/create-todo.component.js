import React, { Component } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export default class CreateTodo extends Component {

    state = {
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    }

    onChangeTodoDescription = (e) => {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible = (e) => {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority = (e) => {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description ${this.state.todo_description}`)
        console.log(`Todo Responsible ${this.state.todo_responsible}`)
        console.log(`Todo Priority ${this.state.todo_priority}`)
        console.log(`Todo Completed ${this.state.todo_completed}`)

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render () {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                                    type="text" 
                                    placeholder="Description" 
                                    value={this.state.todo_description}
                                    onChange={this.onChangeTodoDescription}
                                    />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Responsible</Form.Label>
                        <Form.Control 
                                    type="text" 
                                    placeholder="Responsible" 
                                    value={this.state.todo_responsible}
                                    onChange={this.onChangeTodoResponsible}
                                    />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Check
                            style={{marginLeft: '16px'}}
                            type="radio"
                            label="Low"
                            id='priorityLow'
                            value='Low'
                            checked={this.state.todo_priority==='Low'}
                            onChange={this.onChangeTodoPriority}
                        />
                        <Form.Check
                            style={{marginLeft: '16px'}}
                            type="radio"
                            label="Medium"
                            name='priorityOptions'
                            id='priorityMedium'
                            value='Medium'
                            checked={this.state.todo_priority==='Medium'}
                            onChange={this.onChangeTodoPriority}
                        />
                        <Form.Check
                            style={{marginLeft: '16px'}}
                            type="radio"
                            label="High"
                            id='priorityHigh'
                            value='High'
                            checked={this.state.todo_priority==='High'}
                            onChange={this.onChangeTodoPriority}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Todo
                    </Button>
                </Form>                
            </div>
        )
    }
}

