import {render, screen} from '@testing-library/react';
import Hello from './Hello';

test('renderiza sin nombre', () => {
  render(<Hello/>);
  expect(screen.getByText(/Hey, strange/i)).toBeInTheDocument();
});

test('renderiza con nombre', () => {
  render(<Hello name="Jenny"/>);
  expect(screen.getByText(/Hello, Jenny!/i)).toBeInTheDocument();

  render(<Hello name="Margaret"/>);
  expect(screen.getByText(/Hello, Margaret!/i)).toBeInTheDocument();
});
