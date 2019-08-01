import React, { Component } from 'react';
import { Layout } from 'antd';
import TableView from './TableView/TableView';
import ChartView from './ChartView/ChartView';
import { connect } from 'react-redux';
import { CHART_VIEW, LIST_VIEW } from '../../constants/views';
import { loadAthleteData } from '../../store/actions/athleteActions'
import { FormattedAthlete } from '../../interfaces/athletes'

const { Content, Footer } = Layout;

interface DashBoardAreaProps {
	activeView: string;
  athletes: Array<FormattedAthlete>
  loadAthleteData: () => void
}

class DashBoardArea extends Component<DashBoardAreaProps> {

	componentDidMount() {
    this.props.loadAthleteData()
	}

	render() {
		const { activeView, athletes } = this.props;

		return (
			<Layout>
				<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					{activeView === LIST_VIEW && <TableView dataSource={athletes} />}

					{activeView === CHART_VIEW && <ChartView />}
				</Content>
				<Footer style={{ textAlign: 'center' }}>Created by Dennis Xiao</Footer>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardArea);
