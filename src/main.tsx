import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './views/HomePage';
import ErrorPage from './components/LayoutComponents/error-page';
import AboutPage from './views/AboutPage';
import Layout from './Layout.tsx';

import ProjectPage from './views/ProjectPage';
import TasksDetailPage from './views/TasksDetailPage';
import Stats from './components/Stats.tsx';
import ProjectsPage from './views/ProjectsPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/projects/:id',
        element: <ProjectPage />,
        children: [
          {
            path: '',
            element: <TasksDetailPage />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
