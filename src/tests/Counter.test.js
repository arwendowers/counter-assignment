// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');

  expect(count).toHaveTextContent('0');

  fireEvent.click(incrementButton);
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');

  expect(count).toHaveTextContent('0');

  fireEvent.click(decrementButton);
  expect(count).toHaveTextContent('-1');
});
