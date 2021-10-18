import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Test Component', () => {
	const testText = 'Testing!';

	const renderComponent = () => render(<Button>{testText}</Button>);

	it('should render hi', () => {
		const { getByTestId } = renderComponent();

		const button = getByTestId('button');

		expect(button).toHaveTextContent(testText);
	});
});
