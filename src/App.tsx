import React from 'react';
import { Layout, Space } from 'antd';
import ProblemList from './problemview/ProblemList';
import { GithubFilled } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout style={{height: '100%'}}>
      <Header className='header-class'>Page Header</Header>
      <Content className='content'>
        <div className='content-body-wrapper'>
          <ProblemList />
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        <Space size='small'>
          <a href='https://github.com/peterhieuvu/leetcode-randomizer'><GithubFilled className='icon-link' /></a>
          Peter Hieu Vu ©2022
        </Space>
      </Footer>
    </Layout>
  );
}

export default App;
