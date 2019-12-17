import { App, addTodo } from './App';
import React from 'react';

test('#addTodo() with axios', () => {
    expect(addTodo('Jest')).toContain('id');
})