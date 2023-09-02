/* eslint-disable react/react-in-jsx-scope */

import { Outlet } from 'react-router-dom';
import AddTaskForm from '../components/AddTaskForm';
import Tasks from '../components/Tasks';
import ProjectHeader from '../components/ProjectHeader';

export default function ProjectPage() {
  return (
    <>
      <ProjectHeader />

      <div className="grid grid-cols-3 mt-6 divide-x-2 divide-gray-300">
        <Tasks />
        <main>
          <Outlet />
        </main>
        <AddTaskForm />
      </div>
    </>
  );
}
