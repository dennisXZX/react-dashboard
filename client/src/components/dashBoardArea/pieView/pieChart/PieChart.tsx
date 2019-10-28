import React, { Component } from 'react';
import Chart from 'chart.js';
import { PieChartProps } from './IPieChart';
import { generateChartColors } from '../../../../utils/color'

class PieChart extends Component<PieChartProps> {
	pieChartRef: any = React.createRef();

	componentDidMount() {
		const { dataset, labels, title } = this.props;

		const pieChartRef = this.pieChartRef.current.getContext('2d');

		const bgColors = generateChartColors(dataset);

    new Chart(pieChartRef, {
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
	}

	render() {
		return <canvas id="myChart" ref={this.pieChartRef} />;
	}
}

export default PieChart;
