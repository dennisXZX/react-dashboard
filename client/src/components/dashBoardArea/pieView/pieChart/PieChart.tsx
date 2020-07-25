import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { generateChartColors } from '../../../../utils/color';

export interface PieChartProps {
	title: string;
	dataset: Array<number>;
	labels: Array<string>;
}

const PieChart: React.FC<PieChartProps> = props => {
	const pieChartRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const { dataset, labels, title } = props;

		const pieChartContext = pieChartRef.current?.getContext('2d');

		const bgColors = generateChartColors(dataset);

		new Chart(pieChartContext as CanvasRenderingContext2D, {
			type: 'pie',
			data: {
				datasets: [
					{
						data: dataset,
						backgroundColor: bgColors
					}
				],
				labels: labels
			},
			options: {
				title: {
					display: true,
					text: title,
					fontSize: 18
				},
				legend: {
					position: 'bottom',
					labels: {
						padding: 10
					}
				}
			}
		});
	}, [props]);

	return <canvas id="myChart" ref={pieChartRef} />;
};

export default PieChart;
