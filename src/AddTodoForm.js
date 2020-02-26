import React, { Component } from 'react'

export class AddTodoForm extends Component {
    render() {
        return (
            <form>
                <input type="text" onChange={this.props.handleAddInput} value={this.props.addInput} />
                <button type="submit" onClick={this.props.handleAddSubmit}>Add item to Todo List</button>
            </form>
        )
    }
}
