import Form from './Form';
import { render, screen} from '@testing-library/react'; 
import { describe, test} from 'vitest';


describe('Form', () => { 
    test('renders the button', () => {
        render (<Form/>)
        screen.getByRole('button', {
            name: /Submit/,
        });
    });

});