/* eslint-disable react/react-in-jsx-scope */
import { ChevronRight, ChevronDown } from '../assets/icons.js';
import AddSubTaskForm from '../components/AddSubTaskForm.js';

export default function TasksDetail() {
  return (
    <div className="ml-4 border-red-300">
      <h1 className="text-2xl font-bold text-green-200">Tasks detail</h1>
      <div className="mt-5 flex flex-col gap-7 ">
        <div>
          <div className="flex items-center">
            <ChevronDown />
            <h1 className="text-2xl text-">Frontend web development</h1>
          </div>
          <div className="mt-5 ml-16 flex flex-col gap-7 ">
            <h1 className="text-2xl  text-zinc-500">
              Introduction to Frontend
            </h1>
            <h1 className="text-2xl  text-zinc-500">HTML: A deep dive</h1>
            <h1 className="text-2xl  text-zinc-500">CSS: Stylesheets</h1>
            <AddSubTaskForm />
          </div>
        </div>
        <div className="flex items-center">
          <ChevronRight />
          <h1 className="text-2xl">Backend web development</h1>
        </div>
        <div className="flex items-center">
          <ChevronRight />
          <h1 className="text-2xl">APIs in the web</h1>
        </div>
      </div>
    </div>
  );
}
