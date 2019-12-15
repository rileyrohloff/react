import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'learn react!',
        completed: false
      },
      {
        id: 3,
        title: 'test the react app',
        completed: false
      }
    ]
  }
  //toggle complete to change state.todo.completed
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) } );
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      complete: false
    };


    this.setState({ todos: [...this.state.todos, newTodo] })
  }



  render() {
      return (
        <Router>
          <div className="App">
            <div className='container'>
            <Header />
            <Route path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
            </div>
          </div>
        </Router>
      );
  }
  }
export default App;
