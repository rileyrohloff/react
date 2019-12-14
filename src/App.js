import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

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
  render() {
    console.log(this.state.todos)
      return (
          <div className="App">
              <h1>Riley's Testing App</h1>
              <Todos todos={this.state.todos} />
          </div>
      );
  }
  }
export default App;
