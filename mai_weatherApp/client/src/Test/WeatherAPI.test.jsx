import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import WeatherAPI from '../WeatherAPI';
import { UserProvider} from '../UserContext';

// Mock the useUser hook to return a controlled value for tests
vi.mock('./UserContext', () => ({
  useUser: vi.fn(() => ({ userData: { id: '123' } }))
}));

describe('WeatherAPI', () => {
  beforeEach(() => {
    // Clear the mock state before each test
    vi.clearAllMocks(); // Clear any previous mocks
  });

  it('renders the WeatherAPI component', () => {
    render(
      <UserProvider> {/* Wrap with UserProvider to provide context */}
        <WeatherAPI />
      </UserProvider>
    );
    // Check if the title is rendered
    expect(screen.getByText(/Mai Weather App/i)).toBeTruthy;
  });

  it('displays an error message when no location is entered', async () => {
    render(
      <UserProvider>
        <WeatherAPI />
      </UserProvider>
    );

    // Simulate clicking the Search button
    fireEvent.click(screen.getByText(/Search/i));
    
    // Check for the error message
    expect(await screen.findByText(/Please enter a location./i)).toBeTruthy();
  });
});