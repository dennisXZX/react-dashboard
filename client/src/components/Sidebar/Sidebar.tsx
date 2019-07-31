import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import Logo from './Logo'
import logoImage from '../../assets/images/logo.png';
import { changeView } from '../../store/actions/viewActions'
import { connect } from 'react-redux'
import { CHART_VIEW, LIST_VIEW } from '../../constants/views'
import { AssociatedAthletes } from '../../interfaces/athletes'

const { Sider } = Layout;

interface SidebarProps {
  changeView: any;
}

class Sidebar extends Component<SidebarProps> {
  render () {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <Logo src={logoImage} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item
            key="1"
            onClick={() => this.props.changeView(LIST_VIEW)}
          >
            <Icon type="table" />
            <span className="nav-text">Table View</span>
          </Menu.Item>

          <Menu.Item
            key="2"
            onClick={() => this.props.changeView(CHART_VIEW)}
          >
            <Icon type="pie-chart" />
            <span className="nav-text">Chart View</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

const mapDispatchToProps = {
  changeView
}

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
