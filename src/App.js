import React, { useState } from 'react';
import './App.css';
import Todo from './components/TodoItem';
import Header from './components/layout/Header';


function App() {
    const [todos, setTodos] = useState([
        {text: 'Learn react hooks'},
        {text: 'then adjust current app'}
    ]);
    return(
        <div>
            <Header />
            {todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} />
            ))}
        </div>
    )
}

export default App