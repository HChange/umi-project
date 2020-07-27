import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout:{},
  theme: {
    'primary-color': '#9b9b9b',
  },
  routes,
  title: 'HelloChange',
  publicPath: '/public/',
});
