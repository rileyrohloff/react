import App  from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

test('testing jest', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
})