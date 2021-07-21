import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NabarNoCmp from './NavbarNoCmp';

describe('<NabarNoCmp />', () => {
  test('it should mount', () => {
    render(<NabarNoCmp />);
    
    const navBar = screen.getByTestId('NabarNoCmp');

    expect(navBar).toBeInTheDocument();
  });
});