import React, { Component } from 'react'
import { Layout } from 'antd';
import TableView from './TableView/TableView'

const { Content, Footer } = Layout;

class DashBoardArea extends Component {
  componentDidMount() {
    fetch('/api/athletes')
      .then(data => data.json())
      .then(data => console.log(data))
  }

  render () {
    return (
      <Layout>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <TableView />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Dennis Xiao</Footer>
      </Layout>
    );
  }
}

export default DashBoardArea;
