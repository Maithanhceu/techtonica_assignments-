import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from './components/Form';

describe('MyForm', () => {
  test('renders MyForm Component', () => {
      render(<MyForm />);
  });
});