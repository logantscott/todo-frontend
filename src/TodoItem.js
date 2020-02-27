import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <span onClick={() => this.props.handleToggle(this.props.todo)} id={this.props.todo.id} className={this.props.todo.complete ? 'true' : 'false'}>
                    {this.props.todo.task}
                </span>
                <span className="delete" onClick={() => this.props.handleDelete(this.props.todo.id)}>
                    del
                </span>
            </div>
        )
    }
}
