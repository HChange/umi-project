export interface Route {
  path?: string;
  component?: string;
  title?: string;
  redirect?: string;
  routes?: Route[];
}

// 默认首页
const homePage = { path: '/', redirect: '/home' };

const basic = {
  path: '/',
  component: '@/layouts/index',
  routes: [homePage, { path: '/home', component: '@/pages/index' }, { component: './404' }],
};

const routes: Route[] = [basic, { component: './404' }];

export default routes;
