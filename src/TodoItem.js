import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                {this.props.todo.id}
                {this.props.todo.task}
                {this.props.todo.complete}
            </div>
        )
    }
}
