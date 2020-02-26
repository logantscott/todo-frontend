import React, { Component } from 'react'

export class AddTodoForm extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleAddInput} value={this.props.addInput} />
                <button type="button" onClick={this.props.handleAddSubmit}>Add item to Todo List</button>
            </div>
        )
    }
}
