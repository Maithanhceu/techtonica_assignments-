// src/Test/User.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import User from '../User';
import { UserProvider } from '../UserContext';


vi.mock('../UserContext', () => ({
  UserProvider: ({ children }) => <div>{children}</div>, 
  useUser: () => ({
    userData: null,
    setUserData: vi.fn(),
  }),
}));

describe('User Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear previous mocks before each test
  });

  it('renders input and buttons', () => {
    render(
      <UserProvider>
        <User />
      </UserProvider>
    );

    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Sign Out/i })).toBeTruthy();
  });

  it('shows an error if the username is empty', async () => {
    render(
      <UserProvider>
        <User />
      </UserProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

    expect(await screen.findByText(/Please enter your name./i)).toBeTruthy();
  });
});
