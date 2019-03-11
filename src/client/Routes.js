import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ArticleListPage from './pages/ArticleListPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        path: '/articles/:id',
        ...ArticleListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
