import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from './components/Form';
import ListEvents from './components/ListEvents';

describe('MyForm', () => {
  test('renders MyForm Component', () => {
      render(<MyForm />);
  });
});

test('renders ListEvents component', () => {
  render(<ListEvents />);
  const element = screen.getByTestId('maibody'); 
  expect(element).toBeInTheDocument();  
});
