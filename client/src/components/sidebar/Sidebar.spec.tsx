import React from 'react';
import { render } from '../../test-helpers/test-utils';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
	it('should render correct Sidebar based on default props', () => {
		const wrapper = render(<Sidebar />);
		const sideBar = wrapper.getByTestId('test-sidebar');

		expect(sideBar).toBeInTheDocument();
    expect(sideBar.querySelectorAll('li').length).toEqual(2);
	});
});
