/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Layout, Space } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import ProblemList from './problemview/ProblemList';

const { Header, Footer, Content } = Layout;

const App = () => (
    <Layout style={{ height: '100%' }}>
        <Header className='header-class'>Page Header</Header>
        <Content className='content'>
            <div className='content-body-wrapper'>
                <ProblemList />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            <Space size='small'>
                <a href='https://github.com/peterhieuvu/leetcode-randomizer'><GithubFilled className='icon-link' /></a>
                Peter Hieu Vu ©2022
            </Space>
        </Footer>
    </Layout>
);

export default App;
