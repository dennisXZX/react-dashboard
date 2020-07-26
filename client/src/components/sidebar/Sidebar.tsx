import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Logo from './logo/Logo';
import logoImage from '../../assets/images/logo.png';
import { changeView } from '../../store/actions/viewActions';
import { useDispatch } from 'react-redux';
import { PIE_VIEW, TABLE_VIEW } from '../../constants/views';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<Sider breakpoint="lg" collapsedWidth="0" data-testid="test-sidebar">
			<Logo src={logoImage} />

			<Menu theme="dark" mode="vertical" defaultSelectedKeys={['tableView']}>
				<Menu.Item key="tableView" onClick={() => dispatch(changeView(TABLE_VIEW))}>
					<Icon type="table" />
					<span className="nav-text">Table View</span>
				</Menu.Item>

				<Menu.Item key="pieView" onClick={() => dispatch(changeView(PIE_VIEW))}>
					<Icon type="pie-chart" />
					<span className="nav-text">Pie View</span>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Sidebar;
