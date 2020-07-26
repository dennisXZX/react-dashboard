import React from 'react';
import { render, screen } from '../../test-helpers/test-utils';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
	it('should render correct Sidebar based on default props', () => {
		render(<Sidebar />);

		expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
		expect(screen.getAllByRole('menuitem').length).toEqual(2);
	});
});
