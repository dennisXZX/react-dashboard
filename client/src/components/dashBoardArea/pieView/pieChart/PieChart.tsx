import React, { Component } from 'react';
import Chart from 'chart.js';
import { PieChartProps } from './IPieChart';

class PieChart extends Component<PieChartProps> {
	pieChartRef: any = React.createRef();

	componentDidMount() {
		const { dataset, labels, title } = this.props;

		const pieChartRef = this.pieChartRef.current.getContext('2d');

		new Chart(pieChartRef, {
			type: 'pie',
			data: {
				datasets: [
					{
						data: dataset
					}
				],
				labels: labels
			},
			options: {
				title: {
					display: true,
					text: title
				}
			}
		});
	}

	render() {
		return <canvas id="myChart" ref={this.pieChartRef} />;
	}
}

export default PieChart;
