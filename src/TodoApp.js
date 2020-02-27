import React, { Component } from 'react'
import { getTodos, addTodo, updateTodo, deleteTodo } from './api_services.js';
import { AddTodoForm } from './AddTodoForm.js';
import { TodoList } from './TodoList.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

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
            this.setState({ todos: this.state.todos.slice(0, -1) })
            this.setState({ todos: this.state.todos.concat([data.body]) })
            
        } else {
            alert('Please enter a task...');
        }
    }

    // handle completing/uncompleting tasks
    handleToggle = async(todo) => {
        const newTodos = [...this.state.todos];
        const thisTodo = this.state.todos.findIndex(el => el.id === todo.id);
        newTodos[thisTodo].complete = !todo.complete;
        this.setState({ todos: newTodos });

        const data = await updateTodo(todo);
        console.log(data.body);
    }

    // handle deleting tasks
    handleDelete = async(todoId) => {
        const newTodos = [...this.state.todos];
        newTodos.splice(this.state.todos.findIndex(el => el.id === todoId), 1);
        this.setState({ todos: newTodos });

        const params = { id: todoId };
        const data = await deleteTodo(params);
        console.log(data.body);
    }

    render() {
        return (
            <div>
                {isLoggedIn() 
                        ? <button onClick={() => {
                            localStorage.clear();
                            window.location.reload(false);
                        }}>Logout</button>
                : ''}
                <br />
                <AddTodoForm 
                    handleAddInput={this.handleAddInput} 
                    addInput={this.state.addInput} 
                    handleAddSubmit={this.handleAddSubmit} 
                />
                <TodoList 
                    todos={this.state.todos} 
                    handleToggle={this.handleToggle} 
                    handleDelete={this.handleDelete} 
                />
            </div>
        )
    }
}
