import React from 'react';
import { Table } from 'antd';
import { columns, footerGenerator } from './tableViewConfig';
import { ViewProps } from '../../../interfaces/IView';

const TableView: React.FC<ViewProps> = props => {
		const { dataSource } = props;

		return (
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            footer={footerGenerator}
          />
        );
}

export default TableView;
