import App from './App';
import React from 'react';
import { add } from './App'

test('Adding test', () => {
  expect(add(1,2)).toEqual(3)
});