import React, { Component } from 'react';
import { Table } from 'antd';
import { TableViewProps } from './ITableView';
import { columns } from './tableViewConfig';

class TableView extends Component<TableViewProps> {
	render() {
		const { dataSource } = this.props;

		return <Table dataSource={dataSource} columns={columns} pagination={false} />;
	}
}

export default TableView;
