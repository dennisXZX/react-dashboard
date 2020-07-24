import React, { useEffect } from 'react';
import { Layout } from 'antd';
import TableView from './tableView/TableView';
import PieView from './pieView/PieView';
import { useSelector, useDispatch } from 'react-redux';
import { PIE_VIEW, TABLE_VIEW } from '../../constants/views';
import { loadAthleteData } from '../../store/actions/athleteActions';
import styled from 'styled-components';
import { AppState } from '../../interfaces/IAppStates';

const { Content } = Layout;

const ContentContainer = styled.div`
	margin-top: 17px;
`;

const DashBoardArea: React.FC = () => {
	const dispatch = useDispatch();
	const { activeView } = useSelector((state: AppState) => state.view);
	const { athletes } = useSelector((state: AppState) => state.athlete);

	useEffect(() => {
		dispatch(loadAthleteData());
	}, [dispatch]);

	return (
		<Layout>
			<ContentContainer>
				<Content>
					{activeView === TABLE_VIEW && <TableView dataSource={athletes} />}
					{activeView === PIE_VIEW && <PieView dataSource={athletes} />}
				</Content>
			</ContentContainer>
		</Layout>
	);
};

export default DashBoardArea;
