import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import CreateUser from '../CreateUser';

describe('CreateUser Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); 

    vi.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: '1', username: 'Kris J', favorite_city: 'New York' }),
      })
    );
  });

  it('renders input fields and button', () => {
    render(<CreateUser />);
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/Favorite City/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /Add User/i })).toBeTruthy();
  });

  it('displays success message on successful user creation', async () => {
    render(<CreateUser />);

    fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), {
      target: { value: 'Kris J' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Favorite City/i), {
      target: { value: 'New York' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Add User/i }));

    // Wait for and check success message
    expect(await screen.findByText(/User created successfully!/i)).toBeTruthy();
  });
});
