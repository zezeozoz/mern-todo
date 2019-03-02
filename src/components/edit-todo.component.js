import React, { Component } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default class EditTodo extends Component {
    state = {
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    }

    componentDidMount = () => {
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })
            .catch(err => {
                console.log(err)
            });
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

    onChangeTodoCompleted = (e) => {
        this.setState({
            todo_completed: e.target.checked
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const updatedTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, updatedTodo)
            .then(res => console.log(res.data));

        this.props.history.push('/')
        console.log(this.state.todo_completed)
        console.log(this.props.match.params.id)
    }

    render () {
        return (
            <div>
                <h3>Update Todo</h3>
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
                    <Form.Group>
                        <Form.Check
                                type="checkbox"
                                label="Completed"
                                id='completedCheckbox'
                                name='completedCheckbox'
                                checked={this.state.todo_completed}
                                onChange={this.onChangeTodoCompleted}
                                value={this.state.todo_completed}
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Change
                    </Button>
                </Form>                
            </div>
        )
    }
}

