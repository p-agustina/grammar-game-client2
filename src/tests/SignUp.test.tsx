import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import SignUp from '../pages/SignUp';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SignUp component', () => {
  it('renders sign up form', () => {
    render(
        <Router>
            <SignUp />
        </Router>
        );
  
    // Use queries from Testing Library to assert the presence of specific elements
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
  });

  // Add more test cases as needed
});