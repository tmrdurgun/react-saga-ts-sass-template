
import React from 'react';

const routes = [
  { path: '/todo', exact: true, component: React.lazy(() => import('./pages/Todo/Todo')) },
];

export default routes;
