import './index.css';
import App from './App.tsx';
import ErrorPage from './components/LayoutComponents/error-page.tsx';
import About from './views/About.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.tsx';
import ProjectPage from './views/ProjectPage.tsx';
import TasksDetail from './views/TasksDetail.tsx';
import Stats from './components/Stats.tsx';
import Projects from './views/Projects.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects/:id',
        element: <ProjectPage />,
        children: [
          {
            path: 'task-detail',
            element: <TasksDetail />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
        ],
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
