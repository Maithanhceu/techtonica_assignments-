import { render, screen } from '@testing-library/react';
import Contacts from '../Contacts';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

describe('Contacts Component', () => {
  const mockContacts = [
      { contactid: 1, name: 'Japanese Breakfast', email: 'Japanese@example.com', phone: '123-456-7890', notes: 'Asian-American babe', quotes: 'Everybody wants to love you', vibe: 'Crying in H-Mart' },
  ];

  const mockSetContacts = vi.fn();

  it('renders without crashing', () => {
      render(<Contacts contacts={mockContacts} setContacts={mockSetContacts} />);
      
      // Check if the contacts are rendered in the dropdown
      const selectElement = screen.getByRole('combobox');
      expect(selectElement).not.toBeNull(); 

      expect(screen.getByText('Select a contact')).toBeTruthy(); 
      expect(screen.getByText('Japanese Breakfast')).toBeTruthy();
});
});