import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            backgroundColor: this.props.todo.completed ?
            '#2EBC19': 'none'
        }
    }
    render() {
        return (
        <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
        </div>
        )
    }
}

//Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem