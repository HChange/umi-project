import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const ILayout: React.FC<any> = (props) => {
  return (
    <Layout>
      <Header {...props} />
      <Content {...props} />
      <Footer {...props} />
    </Layout>
  );
};

export default ILayout;
