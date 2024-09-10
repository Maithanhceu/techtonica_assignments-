/* eslint-disable no-undef */
import { render, screen} from '@testing-library/react'; 
import Header from './components/header'; 
import Item from './components/item'
import Form from './components/form';
import { expect } from 'vitest';

describe('Header', () => {
    test('renders Header Component', () => {
        render(<Header />);
    });
});

describe ('Item', () => {
    test ('renders Item Component', () => {
        render(<Item  item={{text: 'Test Item'}}/>); 

        const item = screen.getByText('Test Item');
        expect(item.className).toContain('singleitem');
    })
})

describe('Form', () => { 
    test('renders the button', () => {
        render (<Form/>)
        screen.getByRole('button', {
            name: /Submit/,
        });
    });

});