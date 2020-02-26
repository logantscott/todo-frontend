import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div onClick={this.props.handleToggle} id={this.props.todo.id} className={String(this.props.todo.complete)}>
                {/* {this.props.todo.id} */}
                {this.props.todo.task}
                
            </div>
        )
    }
}
