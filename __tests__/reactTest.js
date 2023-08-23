import React from 'react';
// const React = require('react');
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime'
// import { configureStore } from '@reduxjs/toolkit';
// const { render, screen, waitFor} = require('@testing-library/react');
// const regenerator = require('regenerator-runtime');


// we are using Jest here -- you could use other testing frameworks with RTL or use RTL on its own, but here we get the best of both worlds

//import '@testing-library/jest-dom';

import Input from '../client/components/Input';
import TVDisplay from '../client/components/TVDisplay';
import Recommendation from '../client/components/Recommendation';
// const Input = require('../client/components/Input');
// const Recommendation = require('../client/components/Recommendation');
// const TVDisplay = require('../client/components/TVDisplay');
import TestDisplay from '../client/components/TestDisplay';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);



describe('Testing React Components', () => {


    test('Display Input component', async () => {
        //render(<Input store={store} />)

        const initialState = {
            shows: [],
            loading: false,
            error: null,
            showAddButton: true,
            showDeleteButton: false
          }
        
          const store = mockStore(initialState);

          render(<Provider store={store}>
                    <Input />
                </Provider>)

        
    
    
        const buttons = await screen.findAllByRole('button')
        expect(buttons.length).toBe(2);
        //expect(buttons[0]).toHaveTextContent(' submit ');
    
        // const inputs = await screen.findAllByRole('input')
        // expect(buttons.length).toBe(4);
        
    })

    // test('test testDisplay component', async() => {
    //     console.log('before')
    //     render(<TestDisplay />)

    //     console.log('after')

    //     const headings = await screen.findAllByRole('heading');

    //     expect(headings[0]).toHaveTextContent('Hello');


    // })
})
