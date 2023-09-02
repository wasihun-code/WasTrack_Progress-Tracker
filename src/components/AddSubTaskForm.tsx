/* eslint-disable react/react-in-jsx-scope */
export default function AddSubTaskForm() {
  return (
    <form className="">
      <input
        className="p-2 mr-4 text-md border-slate-400 border-2 rounded-lg w-1/2"
        name=""
        id=""
        placeholder="Task title"
      />
      <button className="text-md p-2 text-white rounded-lg bg-darkCyan">
        Add subtask
      </button>
    </form>
  );
}
