import React from 'react';
import { Layout, Tabs } from 'antd';
import { Link, IRouteComponentProps } from 'umi';
import styles from './index.less';
import { tabConfig } from '../constants';

const { TabPane } = Tabs;
const { Header } = Layout;

const IHeader: React.FC<IRouteComponentProps> = (props) => {
  return (
    <Header className={styles.header}>
      <div className={styles.logoWrap}>
        <div className={styles.logo} />
      </div>
      <Tabs
        className={styles.tabs}
        defaultActiveKey={props.location.pathname.replace('/', '')}
        size="large"
        tabPosition="top"
        style={{ flex: 1 }}
      >
        {tabConfig.map(({ link, key, icon: TabsIcon, text }) => (
          <TabPane
            tab={
              <Link to={link} style={{ padding: '20px 0' }}>
                <TabsIcon />
                {text}
              </Link>
            }
            key={key}
          />
        ))}
      </Tabs>
    </Header>
  );
};

export default IHeader;
