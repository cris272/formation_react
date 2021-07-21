import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainLayout from './MainLayout';

describe('<MainLayout />', () => {
  test('it should mounts', () => {
    render(<MainLayout />);
    
    const mainLayout = screen.getByTestId('MainLayout');

    expect(mainLayout).toBeInTheDocument();
  });
  test('enfant', () => {
    render(<MainLayout><div data-testid="children">div1</div><div>div2</div></MainLayout>);
    
	const ancestor = screen.getByTestId('MainLayout')
	const descendant = screen.getByTestId('children')
	expect(ancestor).toContainElement(descendant)
	expect(descendant).not.toContainElement(ancestor)

  });
});