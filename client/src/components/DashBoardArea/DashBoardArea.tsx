import React, { Component } from 'react'
import { Layout } from 'antd';
import TableView from './TableView/TableView'
import axios from 'axios'
import ChartView from './ChartView/ChartView'
import { associateStaticsToAthlete } from '../../utils/dataFormatter'
import { connect } from 'react-redux'
import { CHART_VIEW, LIST_VIEW } from '../../constants/views'

const { Content, Footer } = Layout;

interface DashBoardAreaProps {
  activeView: any;
}

class DashBoardArea extends Component<DashBoardAreaProps> {
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
    const { activeView } = this.props

    return (
      <Layout>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {
            activeView === LIST_VIEW &&
              <TableView
                dataSource={this.state.athletes}
              />
          }

          {
            activeView === CHART_VIEW &&
              <ChartView />
          }
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Dennis Xiao</Footer>
      </Layout>
    );
  }
}

function mapStateToProps(state: any) {
  const { activeView } = state.views

  return {
    activeView
  }
}

export default connect(mapStateToProps)(DashBoardArea);
