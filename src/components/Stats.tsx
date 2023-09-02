/* eslint-disable react/react-in-jsx-scope */
export default function Stats() {
  return (
    <div className="ml-4 border-red-300">
      <h1 className="text-2xl font-bold">Stats</h1>
      <div className="mt-7 flex flex-col gap-7 ">
        <div className="flex justify-around border-2 border-zinc-700 bg-slate-200 p-2 w-4/5 self-center rounded-md">
          <h1 className="text-2xl">Tasks</h1>
          <h1 className="text-2xl">2</h1>
        </div>
        <div className="flex justify-around border-2 border-zinc-700 bg-slate-200 p-2 w-4/5 self-center rounded-md">
          <h1 className="text-2xl">Subtasks</h1>
          <h1 className="text-2xl">42</h1>
        </div>
        <div className="flex justify-around border-2 border-zinc-700 bg-slate-200 p-2 w-4/5 self-center rounded-md">
          <h1 className="text-2xl">Completed </h1>
          <h1 className="text-2xl">2 tasks</h1>
        </div>
        <div className="flex justify-around border-2 border-zinc-700 bg-slate-200 p-2 w-4/5 self-center rounded-md">
          <h1 className="text-2xl">%Completion</h1>
          <h1 className="text-2xl">50%</h1>
        </div>
        <div className="flex justify-around border-2 border-zinc-700 bg-slate-200 p-2 w-4/5 self-center rounded-md">
          <h1 className="text-2xl">Time taken</h1>
          <h1 className="text-2xl">40 days</h1>
        </div>
      </div>
    </div>
  );
}
