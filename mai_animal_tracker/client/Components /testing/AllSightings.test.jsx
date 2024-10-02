import { render, screen } from '@testing-library/react';
import {toBeVisible} from '@testing-library/jest-dom';
import AllSightings from '../AllSightings'


describe('AllSightings Component', () => {
  it('should display "All Sightings"', async () => {
    render(<AllSightings />);
    const message = await screen.findByText(/All Sightings/i);
    
    expect(message).toBeVisible();
  });
});
