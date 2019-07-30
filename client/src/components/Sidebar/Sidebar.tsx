import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import Logo from './Logo'
import logoImage from '../../assets/images/logo.png';

const { Sider } = Layout;

class Sidebar extends Component {
  render () {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <Logo src={logoImage} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
