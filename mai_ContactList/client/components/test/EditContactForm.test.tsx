import React from 'react';
import { render, screen } from '@testing-library/react';
import EditContactForm from '../EditContactForm';
import { describe, it, expect, beforeEach, } from 'vitest';

describe('EditContactForm', () => {
    const mockItem = {
        name: 'Alice',
        email: 'alice@example.com',
        phone: '123-456-7890',
        notes: 'Friend',
        quotes: 'Keep smiling',
        vibe: 'Positive',
    };
    beforeEach(() => {
        render(<EditContactForm item={mockItem} onUpdate={() => { }} onDelete={() => { }}/>);
    });
    it('renders the update button', () => {
        const updateButton = screen.getByRole('button', { name: /Update Contact/i });
        expect(updateButton).to.exist;
    });
});
