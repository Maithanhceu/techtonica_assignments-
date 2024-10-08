import { render, screen, fireEvent} from '@testing-library/react';
import { describe, beforeEach, test, expect} from 'vitest';
import EntrieForm from '../Components/EntrieForm';

describe('EntrieForm Component', () => {
    beforeEach(() => {
        render(<EntrieForm/>);
    });

    test('allows user to input values', () => {

        fireEvent.change(screen.getByPlaceholderText(/blog post/i), {
            target: { value: 'My Blog Post' },
        });
        fireEvent.change(screen.getByPlaceholderText(/entries/i), {
            target: { value: '2023-10-07' },
        });
        fireEvent.change(screen.getByPlaceholderText(/location/i), {
            target: { value: 'New York' },
        });

        expect(screen.getByPlaceholderText(/blog post/i).value).toBe('My Blog Post');
        expect(screen.getByPlaceholderText(/entries/i).value).toBe('2023-10-07');
        expect(screen.getByPlaceholderText(/location/i).value).toBe('New York');
    });
});
