import React, { Component } from 'react';
import { TodoItem } from './TodoItem.js';

export class TodoList extends Component {
    render() {
        return (
            <div id="todolist">
                {this.props.todos.map(todo => <TodoItem todo={todo} handleToggle={this.props.handleToggle} />)}
            </div>
        )
    }
}
