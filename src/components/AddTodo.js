import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({title: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', background: '#555' }}>
                <input type="text"
                name="title"
                placeholder="Add Todo..."
                style={{ flex: '10', padding: '5px' }}
                value={this.state.title}
                onChange={this.onChange}
                aria-label="new todo name"
                />
                <input type="submit"
                value="Submit"
                className="btn"
                style={{ flex: 1 }}
                aria-label="add todo"
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;