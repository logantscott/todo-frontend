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

    handleAddSubmit = async(e) => {
        e.preventDefault();
        if(this.state.addInput !== ''){ 
            const params = { task: this.state.addInput }

            this.setState({
                todos: this.state.todos.concat([{
                    id: Math.random(),
                    task: this.state.addInput,
                    complete: false
                }]),
                addInput: ''
            })

            const data = await addTodo(params);
            console.log(data.body);
            
        } else {
            alert('Please enter a task...');
        }
    }

    // handle completing/uncompleting tasks
    handleToggle = async(e) => {
        const params = {
            id: Number(e.target.id),
            complete: !JSON.parse(e.target.className)
        }

        e.target.className = !JSON.parse(e.target.className);
        const data = await updateTodo(params);
        console.log(data.body)
    }

    // handle deleting tasks
    handleDelete = async(e) => {
        const newTodos = [...this.state.todos]
        const delId = Number(e.target.id.substr(3,9));
        newTodos.splice(this.state.todos.findIndex(el => {
            return el.id === delId
        }), 1)
        this.setState({
            todos: newTodos
        })

        this.state.todos.findIndex(el => {
            return el.id === delId
        })

        const params = {
            id: delId
        }

        const data = await deleteTodo(params);
        console.log(data.body)
    }

    render() {
        return (
            <div>
                <AddTodoForm handleAddInput={this.handleAddInput} addInput={this.state.addInput} handleAddSubmit={this.handleAddSubmit} />
                <TodoList todos={this.state.todos} handleToggle={this.handleToggle} handleDelete={this.handleDelete} />
            </div>
        )
    }
}
