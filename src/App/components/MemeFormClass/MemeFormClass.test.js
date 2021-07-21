import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeFormClass from './MemeFormClass';

describe('<MemeFormClass />', () => {
  test('it should mount', () => {
    render(<MemeFormClass />);
    
    const memeFormClass = screen.getByTestId('MemeFormClass');

    expect(memeFormClass).toBeInTheDocument();
  });
});