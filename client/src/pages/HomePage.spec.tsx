import React from 'react';
import { render, screen } from '../test-helpers/test-utils';
import HomePage from './HomePage';

describe('HomePage', () => {
	beforeEach(() => {
		render(<HomePage />);
	});

	test('should render Sidebar component correctly', () => {
		expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
	});

	test('should render DashBoardArea component correctly', () => {
		expect(screen.getByTestId('test-dashboardarea')).toBeInTheDocument();
	});
});
