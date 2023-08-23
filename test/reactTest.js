import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';


// we are using Jest here -- you could use other testing frameworks with RTL or use RTL on its own, but here we get the best of both worlds
import '@test-library/jest-dom';
import Input from '../client/components/Input';
import TVDisplay from '../client/components/TVDisplay';
import Recommendation from '../client/components/Recommendation';

descrice('Testing React Components', () => {
    test('Display Input component', async () => {
        const input = render(<Input />)
    
        const buttons = await screen.findAllByRole('button')
        expect(buttons.length).toBe(1);
        //expect(buttons[0]).toHaveTextContent(' submit ');
    
        const inputs = await screen.findAllByRole('input')
        expect(buttons.length).toBe(4);
        
    })
})
