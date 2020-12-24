import HomePage from 'pages/home';
import AddVideoPage from 'pages/addVideo';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/add-video',
    component: AddVideoPage,
  },
];

export default routes;
