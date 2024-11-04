import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import CreateUser from '../CreateUser';

describe ('CreateUser', () => {
    it ('Render CreateUser component', ()=> {
        render (
            <CreateUser/> 
        )
    })

})