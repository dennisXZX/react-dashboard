import React from 'react';
import PieChart from './pieChart/PieChart';
import styled from 'styled-components';
import _ from 'lodash';
import { ViewProps } from '../../../interfaces/IView';

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

const ChartView: React.FC<ViewProps> = props => {
	const generateFormattedDataset = (propertyName: string) => {
		const { dataSource } = props;

		const rawDataset = dataSource.map(athleteData => (athleteData as any)[propertyName]);
		const countedDataset = _.countBy(rawDataset);
		const labels = Object.keys(countedDataset);
		const data = Object.values(countedDataset);

		return {
			labels,
			data
		};
	};

	const sorenessDataset = generateFormattedDataset('muscleSoreness');
	const sleepQualityDataset = generateFormattedDataset('sleepQuality');

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
};

export default ChartView;
