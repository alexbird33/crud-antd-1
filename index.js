import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu, LocaleProvider } from 'antd';
import DataPage from './datapage'
import zhCN from 'antd/lib/locale-provider/zh_CN';

const { Header, Content, Footer } = Layout;

export default class App extends React.Component {

render() {
  return (
    <LocaleProvider locale={zhCN}>
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">阀门管理</Menu.Item>
          <Menu.Item key="2">实时监控</Menu.Item>
          <Menu.Item key="3">管理看板</Menu.Item>
        </Menu>
      </Header>

      <DataPage />
      
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Yin Ming
      </Footer>
    </Layout>
  </LocaleProvider>
)};
}

ReactDOM.render(<App />, document.getElementById('root'));
