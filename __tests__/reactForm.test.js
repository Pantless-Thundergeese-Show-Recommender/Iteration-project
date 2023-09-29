import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SignUpForm } from '../client/components/SignUp.jsx';

describe('SignupForm', () => {
  it('renders without crashing', () => {
    expect(() => render(<SignUpForm />)).not.toThrow();
  });

  it('renders a first name text input', () => {
    render(<SignUpForm />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('renders a last name text input', () => {
    render(<SignUpForm />);
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders an error message for each of the inputs if none of them are filled out and the user submits the form', () => {
    render(<SignUpForm />)
    fireEvent.click(screen.getByText('Sign up'))
    
    expect(screen.getByTestId('Username field is required')).toBeInTheDocument();
    expect(screen.getByTestId('Password field is required')).toBeInTheDocument();
  })

});
