import Button from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('<Button />', () => {
	it('empty button', () => {
		render(<Button/>)
		const button=screen.getByTestId('Button');

		expect(button).toBeInTheDocument();
	});
	it('filled button mount with children', () => {
		render(<Button>Content</Button>)
		const button=screen.getByTestId('Button');

		expect(button).toContainHTML('Content');
	});
	it('filled button mount with node children', () => {
		render(<Button>Content<div>node 2</div></Button>)
		const button=screen.getByTestId('Button');

		expect(button).toContainHTML('Content<div>node 2</div>');
	});
	
});
