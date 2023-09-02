/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from '../assets/icons.js';

export default function Tasks() {
  return (
    <div className="ml-4 border-red-300">
      <div className="mt-5 flex flex-col gap-7 ">
        <div>
          <div className="flex items-center">
            <Link to="task-detail">
              <ChevronDown />
            </Link>
            <h1 className="text-2xl">Tasks</h1>
          </div>
          <div className="mt-5 ml-16 flex flex-col gap-7 ">
            <h1 className="text-2xl text-zinc-500">Frontend web development</h1>
            <h1 className="text-2xl text-zinc-500">Backend web development</h1>
            <h1 className="text-2xl text-zinc-500">APIs in the web</h1>
            <h1 className="text-2xl text-zinc-500">Building Projects</h1>
          </div>
        </div>
        <div className="flex items-center">
          <Link className="flex items-center" to="stats">
            <h1 className="text-2xl">Statistics</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <h1 className="text-2xl">Charts</h1>
        </div>
        <div className="flex items-center">
          <ChevronRight />
          <h1 className="text-2xl">Your Other Plans</h1>
        </div>
      </div>
    </div>
  );
}
