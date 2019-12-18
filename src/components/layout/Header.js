import React from 'react';
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}


const headerStyle = {
    textAlign: 'center', 
    padding: '10px',
    background: '#FF8A32'
}

export default Header; 