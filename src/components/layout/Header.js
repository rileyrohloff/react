import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/">Home</Link> || <Link to="/about">About</Link>
        </header>
    )
}


const headerStyle = {
    textAlign: 'center', 
    padding: '10px',
    background: '#FF8A32'
}

export default Header; 