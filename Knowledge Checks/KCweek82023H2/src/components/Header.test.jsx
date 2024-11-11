import { render} from '@testing-library/react'; 
import { describe, test, } from 'vitest';
import Header from './Header';

describe('Header', () => {
    test('renders Header Component', () => {
        render(<Header/>);
    });
});
