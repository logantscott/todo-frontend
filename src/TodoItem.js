import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <span onClick={this.props.handleToggle} id={this.props.todo.id} className={String(this.props.todo.complete)}>{this.props.todo.task}</span>
                <span className="delete" id={`del${this.props.todo.id}`} onClick={this.props.handleDelete}>del</span>
            </div>
        )
    }
}
