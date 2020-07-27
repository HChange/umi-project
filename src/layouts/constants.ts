import {
  HomeOutlined,
  ReadOutlined,
  CodepenOutlined,
  GithubOutlined,
  CloudOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const tabConfig = [
  {
    link: '/home',
    key: 'home',
    icon: HomeOutlined,
    text: '首页',
  },
  {
    link: '/blog',
    key: 'blog',
    icon: ReadOutlined,
    text: '博客',
  },
  {
    link: '/project',
    key: 'project',
    icon: CodepenOutlined,
    text: '项目',
  },
  {
    link: '/code',
    key: 'code',
    icon: GithubOutlined,
    text: '代码库',
  },
  {
    link: '/cloud',
    key: 'cloud',
    icon: CloudOutlined,
    text: '可道云',
  },
  {
    link: '/admin',
    key: 'admin',
    icon: UserOutlined,
    text: '管理员',
  },
];
