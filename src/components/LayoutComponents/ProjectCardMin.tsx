/* eslint-disable react/react-in-jsx-scope */
export default function ProjectCardMin() {
  return (
    <div className="p-1 mx-auto">
      <div className="m-4 p-4 border-2 rounded-3xl bg-slate-200 border-slate-600">
        <div className="flex flex-row gap-2 ml-5">
          <img
            src="/src/assets/img/testimonail.png"
            alt="Your Image"
            className="w-1/5 rounded-full overflow-hidden"
          />
          <div className="flex flex-col justify-around ml-5">
            <h1 className="font-bold text-4xl text-left text-blue-600">
              Fullstack webdeveloper
            </h1>
            <p className="text-left text-3xl text-red-500">
              Due on 21 Sep 2022
            </p>
          </div>
        </div>
        <div className="w-full mt-4 bg-gray-200 rounded-full h-6 dark:bg-gray-700">
          <div className="bg-red-600 h-6 rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
}
