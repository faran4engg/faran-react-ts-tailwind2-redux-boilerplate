import { lazy } from 'react';

// use lazy for better code splitting, a.k.a. load faster
const Home = lazy(() => import('../pages/Home'));

const Page404 = lazy(() => import('../pages/404'));

const routes = [
  {
    component: Home, // view rendered
    path: '/home', // the url
  },
  {
    component: Page404,
    path: '/404',
  },
];

export default routes;
