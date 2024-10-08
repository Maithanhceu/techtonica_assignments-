import { render, screen } from '@testing-library/react';
import AllPostCards from '../Components/AllPostCards';
import { describe, it, expect } from 'vitest';

describe('AllPostCards Component', () => {
    const mockData = [
        { id: 1, location: 'Paris', blog: 'Blog content for Paris' },
        { id: 2, location: 'Vancouver', blog: 'Blog content for Vancouver' },
        { id: 3, location: 'New Orleans', blog: 'Blog content for New Orleans' },
    ];

    it('renders the heading and at least one postcard', () => {
        render(<AllPostCards data={mockData} />);

        const heading = screen.getByRole('heading', { name: /All Postcards/i });
        expect(heading).toBeTruthy();

        const parisImage = screen.getByAltText(/Paris/i);
        expect(parisImage).toBeTruthy();
    });
});
