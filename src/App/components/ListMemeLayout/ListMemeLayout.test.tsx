import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListMemeLayout from './ListMemeLayout';

describe('<ListMemeLayout />', () => {
  test('it should mount', () => {
    render(<ListMemeLayout />);
    
    const listMemeLayout = screen.getByTestId('ListMemeLayout');

    expect(listMemeLayout).toBeInTheDocument();
  });
});