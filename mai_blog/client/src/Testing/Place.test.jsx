import { render, screen, fireEvent } from '@testing-library/react';
import Place from '../Components/Place';
import { describe, it, expect } from 'vitest';

describe('Place Component', () => {
    const mockData = [
        { id: 1, location: 'Paris', blog: 'Blog content for Paris' },
    ];

    it('renders buttons for selected location and Translate button', () => {
        render(<Place data={mockData} />);

        const locationButton = screen.getByRole('button', { name: 'Paris' });
        expect(locationButton).toBeDefined();

        fireEvent.click(locationButton);

        const translateButton = screen.getByRole('button', { name: 'Translate' });
        expect(translateButton).toBeDefined();

        const clearButton = screen.getByRole('button', { name: 'Clear Selection' });
        expect(clearButton).toBeDefined();
    });
});
