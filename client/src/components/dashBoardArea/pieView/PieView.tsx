import React, { Component } from 'react';
import PieChart from './pieChart/PieChart';
import styled from 'styled-components';
import { PieViewProps } from './IPieView';
import _ from 'lodash';

const PieViewContainer = styled.div`
	display: flex;
`;

const PieChartContainer = styled.div`
	width: 50%;
	padding: 5px 0 30px 0;
`;

class ChartView extends Component<PieViewProps> {
	render() {
		const { dataSource } = this.props;

		const rawSorenessDataset = dataSource.map(athleteData => athleteData.muscleSoreness);

		const countedSorenessDataset = _.countBy(rawSorenessDataset);

		const sorenessLabels = Object.keys(countedSorenessDataset);
		const sorenessDataset = Object.values(countedSorenessDataset);

		const rawSleepQualityDataset = dataSource.map(athleteData => athleteData.sleepQuality);

		const countedSleepQualityDataset = _.countBy(rawSleepQualityDataset);

		const sleepQualityLabels = Object.keys(countedSleepQualityDataset);
		const sleepQualityDataset = Object.values(countedSleepQualityDataset);

		return (
			<PieViewContainer>
				<PieChartContainer>
					<PieChart
            dataset={sorenessDataset}
            title="Muscle Soreness Distribution"
            labels={sorenessLabels}
          />
				</PieChartContainer>

				<PieChartContainer>
					<PieChart
            dataset={sleepQualityDataset}
            title="Sleep Quality Distribution"
            labels={sleepQualityLabels}
          />
				</PieChartContainer>
			</PieViewContainer>
		);
	}
}

export default ChartView;
