import React, { Component } from 'react';
import { Table } from 'antd';
import { FormattedAthlete } from '../../../interfaces/athletes';

const columns = [
	{
		title: 'Athlete',
		dataIndex: 'athlete',
		key: 'athlete'
	},
	{
		title: 'Muscle Soreness',
		dataIndex: 'muscleSoreness',
		key: 'muscleSoreness'
	},
	{
		title: 'Sleep Quality',
		dataIndex: 'sleepQuality',
		key: 'sleepQuality'
	}
];

interface TableViewProps {
	dataSource: FormattedAthlete[];
}

class TableView extends Component<TableViewProps> {
	render() {
		return <Table
      dataSource={this.props.dataSource}
      columns={columns}
      pagination={false}/>;
	}
}

export default TableView;
