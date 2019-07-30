import React, { Component } from 'react'
import { Layout } from 'antd';
import TableView from './TableView/TableView'
import axios from 'axios'
import ChartView from './ChartView/ChartView'
import { associateStaticsToAthlete } from '../../utils/dataFormatter'

const { Content, Footer } = Layout;

class DashBoardArea extends Component {
  state = {
    athletes: []
  }

  componentDidMount() {
    axios.get('/api/athletes')
      .then(res => {
        const processedData = associateStaticsToAthlete(res.data)
        console.log(processedData)

        this.setState({
          athletes: processedData
        })
      })
  }

  render () {
    return (
      <Layout>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <TableView
            dataSource={this.state.athletes}
          />
          {/*<ChartView />*/}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Dennis Xiao</Footer>
      </Layout>
    );
  }
}

export default DashBoardArea;
