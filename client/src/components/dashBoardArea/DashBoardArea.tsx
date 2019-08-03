import React, { Component } from 'react';
import { Layout } from 'antd';
import TableView from './tableView/TableView';
import PieView from './pieView/PieView';
import { connect } from 'react-redux';
import { PIE_VIEW, TABLE_VIEW } from '../../constants/views';
import { loadAthleteData } from '../../store/actions/athleteActions';
import { DashBoardAreaProps } from './IDashBoardArea';

const { Content } = Layout;

class DashBoardArea extends Component<DashBoardAreaProps> {
	componentDidMount() {
		this.props.loadAthleteData();
	}

	render() {
		const { activeView, athletes } = this.props;

		return (
			<Layout>
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					{activeView === TABLE_VIEW && <TableView dataSource={athletes} />}

					{activeView === PIE_VIEW && <PieView dataSource={athletes} />}
				</Content>
			</Layout>
		);
	}
}

function mapStateToProps(state: any) {
	const { view, athlete } = state;

	return {
		activeView: view.activeView,
		athletes: athlete.athletes
	};
}

const mapDispatchToProps = {
	loadAthleteData
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DashBoardArea);
