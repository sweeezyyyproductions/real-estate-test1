import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import CustomFooter from './Footer'; // Make sure to adjust the import path as necessary

const { Content } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default CustomLayout;
