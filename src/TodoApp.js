import React, { Component } from 'react'
import { getTodos, addTodo, updateTodo, deleteTodo } from './api_services.js';
import { AddTodoForm } from './AddTodoForm.js';
import { TodoList } from './TodoList.js';

export class TodoApp extends Component {
    state = {
        todos: [],
        addInput: ''
    }

    componentDidMount = async() => {
        const data = await getTodos();
        console.log(data.body)
        if(data.body){ this.setState({ todos: data.body }) };
    }

    handleAddInput = (e) => {
        this.setState({ addInput: e.target.value })
    }

    handleAddSubmit = async() => {
        if(this.state.addInput !== ''){ 
            this.setState({
                todos: this.state.todos.concat([{
                    id: Math.random(),
                    task: this.state.addInput,
                    complete: false
                }])
            })
            
            const params = { task: this.state.addInput }
            const data = await addTodo(params);
            console.log(data.body);
        } else {
            alert('Please enter a task...');
        }
    }

    render() {
        return (
            <div>
                <AddTodoForm handleAddInput={this.handleAddInput} addInput={this.state.addInput} handleAddSubmit={this.handleAddSubmit} />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}
