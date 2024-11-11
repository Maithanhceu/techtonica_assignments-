import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AllSightings from '../AllSightings';

describe('AllSightings Component', () => {
    beforeEach(() => {
        // Clear any previous mocks
        vi.clearAllMocks();
    });

    it('displays loading state initially', () => {
        render(<AllSightings />);
        expect(screen.getByText(/loading sightings.../i)).toBeInTheDocument();
    });

    it('displays an error message when fetch fails', async () => {
        // Mock fetch to simulate an error
        vi.mock('node-fetch', () => ({
            __esModule: true,
            default: vi.fn(() =>
                Promise.reject(new Error('Network response was not ok'))
            ),
        }));

        render(<AllSightings />);

        await waitFor(() => {
            expect(screen.getByText(/error fetching sightings: network response was not ok/i)).toBeInTheDocument();
        });
    });

    it('renders sightings when fetch is successful', async () => {
        const mockSightings = [
            {
                sighting_id: 1,
                sighting_date: new Date().toISOString(),
                individual_id: '123',
                nickname: 'Buddy',
                sighting_location: 'Park',
                healthy: true,
                email_address: 'owner@example.com',
            },
        ];

        // Mock fetch to return some sightings
        vi.mock('node-fetch', () => ({
            __esModule: true,
            default: vi.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockSightings),
                })
            ),
        }));

        render(<AllSightings />);

        await waitFor(() => {
            expect(screen.getByText(/sighting date:/i)).toBeInTheDocument();
            expect(screen.getByText(/individual id:/i)).toBeInTheDocument();
            expect(screen.getByText(/nickname:/i)).toBeInTheDocument();
            expect(screen.getByText(/location:/i)).toBeInTheDocument();
            expect(screen.getByText(/healthy:/i)).toBeInTheDocument();
            expect(screen.getByText(/email:/i)).toBeInTheDocument();
        });
    });

    it('displays no sightings message when there are no sightings', async () => {
        // Mock fetch to return an empty array
        vi.mock('node-fetch', () => ({
            __esModule: true,
            default: vi.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve([]),
                })
            ),
        }));

        render(<AllSightings />);

        await waitFor(() => {
            expect(screen.getByText(/no sightings found/i)).toBeInTheDocument();
        });
    });
});
