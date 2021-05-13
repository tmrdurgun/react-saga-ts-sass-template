import React from 'react';

const Todo = React.lazy(() => import('./pages/Todo'));

const routes = [
  { path: '/todo', exact: true, component: Todo },
];

export default routes;
