import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar/Sidebar';
import DashBoardArea from './DashBoardArea/DashBoardArea';

const App: React.FC = () => {
	return (
		<Layout>
			<Sidebar />
			<DashBoardArea />
		</Layout>
	);
};

export default App;
