import Item from './Item'
import { render} from '@testing-library/react'; 
import { describe, test, expect } from 'vitest';

describe ('Item', () => {
    test ('renders Item Component', () => {
        render(<Item  item={{text: 'Test Item'}}/>); 

        const item = screen.getByText('Test Item');
        expect(item.className).toContain('singleitem');
    })
})
