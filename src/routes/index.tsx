import { lazy } from 'react';

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Page404 = lazy(() => import('../pages/404'));
const Blank = lazy(() => import('../pages/Blank'));

const routes = [
  {
    component: Dashboard, // view rendered
    path: '/dashboard', // the url
  },
  {
    component: Page404,
    path: '/404',
  },
  {
    component: Blank,
    path: '/blank',
  },
];

export default routes;
