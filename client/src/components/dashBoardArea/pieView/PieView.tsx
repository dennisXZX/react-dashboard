import React, { Component } from 'react';
import PieChart from './pieChart/PieChart';
import styled from 'styled-components';
import { PieViewProps } from './IPieView';
import _ from 'lodash';

const PieViewContainer = styled.div`
	display: flex;
	flex-direction: column;
	
	@media (min-width: 1200px) {
		flex-direction: row;
	}
`;

const PieChartContainer = styled.div`
	width: 100%;
	margin-bottom: 25px;
	
	@media (min-width: 1200px) {
		margin-bottom: 0;
	}
`;

class ChartView extends Component<PieViewProps> {
	generateFormattedDataset = (propertyName: string) => {
		const { dataSource } = this.props;

		// @ts-ignore
		const rawDataset = dataSource.map(athleteData => athleteData[propertyName]);
		const countedDataset = _.countBy(rawDataset);
		const labels = Object.keys(countedDataset);
		const data = Object.values(countedDataset);

		return {
			labels,
			data
		};
	};

	render () {
		const sorenessDataset = this.generateFormattedDataset('muscleSoreness');
		const sleepQualityDataset = this.generateFormattedDataset('sleepQuality');

		return (
			<PieViewContainer>
				<PieChartContainer>
					<PieChart
						dataset={sorenessDataset.data}
						title="Muscle Soreness Distribution"
						labels={sorenessDataset.labels}
					/>
				</PieChartContainer>

				<PieChartContainer>
					<PieChart
						dataset={sleepQualityDataset.data}
						title="Sleep Quality Distribution"
						labels={sleepQualityDataset.labels}
					/>
				</PieChartContainer>
			</PieViewContainer>
		);
	}
}

export default ChartView;
