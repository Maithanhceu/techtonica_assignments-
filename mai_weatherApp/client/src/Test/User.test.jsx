import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import User from '../User'; 
import { UserProvider } from '../UserContext'; 

describe('User', () => {
  it('renders without crashing', () => {
    render(
      <UserProvider> 
        <User />
      </UserProvider>
    );
  });
});