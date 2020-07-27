import React from 'react';
import { Layout } from 'antd';
import { TabBar } from 'antd-mobile';
import { IRouteComponentProps } from 'umi';
import styles from './index.less';
import { tabConfig } from '../constants';

const { Footer } = Layout;
const IFooter: React.FC<IRouteComponentProps> = (props) => {
  return (
    <>
      <div className={styles.footerTabs}>
        <TabBar>
          {tabConfig.map(({ link, key, icon: TabsIcon, text }) => (
            <TabBar.Item
              title={text}
              key={key}
              icon={<TabsIcon color="#535356" />}
              selectedIcon={<TabsIcon color="#0180df" />}
              onPress={() => props.history.push(link)}
              selected={link === props.location.pathname}
            />
          ))}
        </TabBar>
      </div>
      <Footer className={styles.copyright}>
        Copyright © 2020 <a href="http://www.beian.miit.gov.cn/">湘ICP备19006732</a>
      </Footer>
    </>
  );
};

export default IFooter;
