import App  from './App';
import React from 'react';
import axios from 'axios';
import { render, fireEvent, wait, waitForElementToBeRemoved, findByLabelText, findByDisplayValue, findByText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';



jest.mock('axios', () => {
    const defaultTodos = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
            },
            {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
            },
            {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false
            }
    ]

    const postData = {
        userId: 4,
        id: 4,
        title: "JEST TEST",
        completed: true
    }

        return {
            get: jest.fn(async () => {return await {data: defaultTodos}}),
            delete: jest.fn(async () => {}),
            post: jest.fn(async () => {
                return await {data: postData}})
        }
});

test('renders todo items', async () => {
    const { findAllByLabelText } = render(<App />)
    const todoItems = await findAllByLabelText('mark complete');

    expect(axios.get).toHaveBeenCalledWith(expect.any(String));
    expect(todoItems).toHaveLength(3);
});

test('removes todo when delete button clicked', async () => {
    const { findAllByLabelText } = render(<App />);

    const deleteButtons = await findAllByLabelText('delete todo');
    const deleteButton = deleteButtons[0];

    const todoItemsBefore = await findAllByLabelText('mark complete');
    const firstItemBefore = todoItemsBefore[0];
    
    await act(async () => {
        fireEvent.click(deleteButton);
    });

    const todoItemsAfter = await findAllByLabelText('mark complete');
    const firstItemAfter = todoItemsAfter[0];
    
    expect(axios.delete).toHaveBeenCalledWith(expect.any(String));
    expect(todoItemsAfter).toHaveLength(2);
    expect(firstItemAfter).not.toBe(firstItemBefore);
});

test('adding todo to list from text box', async () => {
    const { findAllByLabelText, findByLabelText, findByText } = render(<App />);
    const todoItemsBefore = await findAllByLabelText('mark complete');
    const textBox = await findByLabelText('new todo name');
    const sumbmitTodoButton = await findByLabelText('add todo');
    expect(todoItemsBefore).toHaveLength(3);

    await act( async () => {
        fireEvent.input(textBox, 'JEST TEST');
        fireEvent.click(sumbmitTodoButton);
        await wait();
    })

    const todoItemsAfter = await findAllByLabelText('mark complete');
    const newAddedTodo = await findByText('JEST TEST')
    expect(todoItemsAfter).toHaveLength(4);
    expect(newAddedTodo).not.toBeNull();
});

test('mark todo complete via checkbox',() => {
    
});