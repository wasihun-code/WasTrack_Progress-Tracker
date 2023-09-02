import ProjectCard from '../components/ProjectCard';

/* eslint-disable react/react-in-jsx-scope */
export default function Projects() {
  return (
    <>
      <h1 className="m-4 text-4xl">Projects</h1>
      <div className="m-4 text-1xl flex flex-row gap-3 w-1/3">
        <h1>All Projects</h1>
        <h1>Pending</h1>
        <h1>Completed</h1>
      </div>
      <div className="grid grid-cols-4 justify-around">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}