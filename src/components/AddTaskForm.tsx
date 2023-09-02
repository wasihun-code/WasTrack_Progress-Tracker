/* eslint-disable react/react-in-jsx-scope */
export default function AddTaskForm() {
  return (
    <div className="mt-5 flex flex-col gap-7 w-5/6 mx-auto">
      <h1 className="text-2xl text-center">New Task Form</h1>
      <div className="mt-5 ml-16 flex flex-col gap-7 ">
        <input
          className="p-3 text-2xl border-slate-400 border-2 rounded-xl w-5/6 mx-auto"
          name=""
          id=""
          placeholder="Enter title"
        />
        <input
          className="p-3 text-2xl border-slate-400 border-2 rounded-xl w-5/6 mx-auto"
          name=""
          id=""
          placeholder="Select date"
        />
        <input
          className="p-3 text-2xl border-slate-400 border-2 rounded-xl w-5/6 mx-auto"
          name=""
          id=""
          placeholder="is the task completed?"
        />
        <button className="text-xl w-3/5 self-center p-4 text-white rounded-xl bg-lightCyan">
          Add Task
        </button>
      </div>
    </div>
  );
}
