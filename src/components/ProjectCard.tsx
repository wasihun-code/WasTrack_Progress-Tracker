/* eslint-disable react/react-in-jsx-scope */

const ProjectCard = () => {
  const circleStyle: React.CSSProperties = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="m-4 p-4 border-2 rounded-3xl bg-slate-200 border-slate-600">
      <div className="flex flex-row gap-2">
        <img
          src="/src/assets/img/testimonail.png"
          alt="Your Image"
          className="w-2/5 rounded-full overflow-hidden"
        />
        <div className="flex flex-col justify-around gap-1">
          <h1 className="font-bold text-2xl text-center text-blue-600 ">
            Fullstack webdeveloper
          </h1>
          <p className="text-center text-red-500">Due on 21 Sep 2022</p>
        </div>
      </div>
      <div className="mt-2 flex flex-row">
        <div className="mt-4 text-xl flex flex-col gap-5 w-1/2">
          <h1>24 tasks</h1>
          <h1>250 Subtasks</h1>
          <h1>3 users</h1>
        </div>
        <div
          style={circleStyle}
          className="bg-orange-400 text-white border-gray-700 border-2"
        >
          <h1 className="text-xl font-bold">20% </h1>
          <h1 className="text-xl font-bold">completed</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
