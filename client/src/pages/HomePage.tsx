import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
import DashBoardArea from '../components/DashBoardArea/DashBoardArea';

const HomePage: React.FC = () => {
	return (
		<Layout>
			<Sidebar />
			<DashBoardArea />
		</Layout>
	);
};

export default HomePage;
