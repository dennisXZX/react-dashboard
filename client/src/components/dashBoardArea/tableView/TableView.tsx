import React from 'react';
import { Table } from 'antd';
import { TableViewProps } from './ITableView';
import { columns, footerGenerator } from './tableViewConfig';

const TableView: React.FC<TableViewProps> = props => {
		const { dataSource } = props;

		return <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      footer={footerGenerator}
    />;
}

export default TableView;
