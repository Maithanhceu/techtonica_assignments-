import EditSpeciesForm from '../EditSpeciesForm';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('EditSpeciesForm', () => {
    const mockItem = {
      species_id: 1,
      common_name: 'Chappell Roan Cat',
      scientific_name: 'Catsual',
      estimated_number: 2,
      conservation_status: 'CC',
    };
  
    const mockOnUpdate = vi.fn();
    const mockOnDelete = vi.fn();
  
    it('should update the estimated number', () => {
      render(
        <EditSpeciesForm item={mockItem} onUpdate={mockOnUpdate} onDelete={mockOnDelete} />
      );
  
      // Change the estimated number to 5
      fireEvent.change(screen.getByLabelText(/Estimated Number/i), {
        target: { value: '5' },
      });
  
      // Click the update button
      fireEvent.click(screen.getByText(/Update Species/i));
  
      // Verify the onUpdate function is called with the updated data
      expect(mockOnUpdate).toHaveBeenCalledWith({
        ...mockItem,
        estimated_number: 5,
      });
    });
  });
