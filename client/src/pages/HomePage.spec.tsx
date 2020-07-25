import React from 'react';
import { render } from '../utils/test-utils';
import HomePage from './HomePage';

describe('HomePage', () => {
	test('should render Sidebar component correctly', () => {
		const wrapper = render(<HomePage />);
		const sideBar = wrapper.getByTestId('test-sidebar');

		expect(sideBar).toBeInTheDocument();
  });
  
  test('should render DashBoardArea component correctly', () => {
		const wrapper = render(<HomePage />);
		const dashBoardArea = wrapper.getByTestId('dashboardarea-sidebar');

		expect(dashBoardArea).toBeInTheDocument();
	});
});
