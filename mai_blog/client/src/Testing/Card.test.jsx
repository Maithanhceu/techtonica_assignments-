import { render} from '@testing-library/react';
import { describe, test} from 'vitest';
import Card from "../Components/Card"; 

describe('Card Component', () => {
  test('renders the Card component', () => {
    render(<Card/>);
  });
});
