import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/sidebar/Sidebar';
import DashBoardArea from '../components/dashboardArea/DashBoardArea';

const HomePage: React.FC = () => {
	return (
		<Layout>
			<Sidebar />
			<DashBoardArea />
		</Layout>
	);
};

export default HomePage;
