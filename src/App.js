import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data))
  }, [])

  //toggle complete to change state.todo.completed
  const markComplete = (id) => {
    setTodos(todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }));
  }

  const delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => setTodos([...todos.filter(todo => todo.id !== id)]))
    .catch(err => console.log(err))
  };

  const addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos?', {
      title,
      completed: false
    }).then(res => setTodos([...todos, res.data]))
    .catch(err => console.log(err))
  }

      return (
        <Router>
          <div className="App">
            <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} markComplete={markComplete}
                delTodo={delTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
            </div>
          </div>
        </Router>
      );
  }

export default App