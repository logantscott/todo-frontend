import React, { Component } from 'react'
import { getTodos } from './api_services.js';
import { AddTodoForm } from './AddTodoForm.js';
import { TodoList } from './TodoList.js';

export class TodoApp extends Component {
    state = {
        todos: []
    }

    componentDidMount = async() => {
        const data = await getTodos();
        console.log(data.body)
        if(data.body){ this.setState({ todos: data.body }) };
    }

    render() {
        return (
            <div>
                <AddTodoForm />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}
