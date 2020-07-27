import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';

const { Content } = Layout;

const IContent: React.FC<{}> = (props) => {
  return <Content className={styles.content}>{props.children}</Content>;
};

export default IContent;
