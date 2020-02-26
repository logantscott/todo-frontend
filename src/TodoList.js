import React, { Component } from 'react';
import { TodoItem } from './TodoItem.js';

export class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo => <TodoItem todo={todo} />)}
            </div>
        )
    }
}
