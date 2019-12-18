import React from 'react';

function Todo({ todo, index }) {
    return(
        <div>
            <p style={itemStyle}>{ todo.text }</p>
        </div>
    )
}

const itemStyle = {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '10px 1rem',
    backgroundColor: '#008FDC',
    borderBottom: '2px dotted',
    borderTop: '2px dotted'
};

export default Todo;