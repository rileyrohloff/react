import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            backgroundColor: this.props.todo.completed ?
            '#2EBC19': ''
        }
    }

    markComplete = (e) => {
        
    }
    render() {
        const { id, title } = this.props.todo;
        return (
        <div style={this.getStyle()}>
        <p>
            <input type='checkbox' aria-label='mark complete' checked={this.props.todo.completed} onChange={() => this.props.markComplete(id)}/> {"  "}
            { title }
            <button style={btnStyle} aria-label='delete todo' onClick={() => this.props.delTodo(id)}>Delete</button>
            </p>
        </div>
        )
    }
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
//Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default TodoItem