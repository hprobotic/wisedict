import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import './index.less';
import GlobalStyle from '../../global-styles';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} className="pro-lat">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="ant-pro-sider-menu-sider"
          width={256}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Account</span>
                </span>
              }
            >
              <Menu.Item key="3">Profile</Menu.Item>
              <Menu.Item key="4">Setting</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
        <GlobalStyle />
      </Layout>
    );
  }
}
DefaultLayout.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default DefaultLayout;
