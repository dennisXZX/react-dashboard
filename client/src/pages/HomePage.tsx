import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/sidebar/Sidebar';
import DashBoardArea from '../components/dashBoardArea/DashBoardArea';

const HomePage: React.FC = () => {
	return (
		<Layout>
			<Sidebar />
			<DashBoardArea />
		</Layout>
	);
};

export default HomePage;
