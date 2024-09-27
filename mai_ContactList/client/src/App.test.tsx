import { render } from '@testing-library/react'; 
import '@testing-library/jest-dom'
import App from './App';

describe('App', () => {
    it('should work as expected', () => {
      render(<App />);
    });
  });