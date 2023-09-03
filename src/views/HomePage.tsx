/* eslint-disable react/react-in-jsx-scope */

import { Progress } from '@material-tailwind/react';
import ProjectCardMin from '../components/LayoutComponents/ProjectCardMin';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="m-3 p-3 flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-7  mb-3 ">
        <div className="border-4 border-lightCyan rounded-3xl">
          <h1 className="text-center text-4xl rounded-t-3xl rounded-4xl bg-lightCyan text-white p-7">
            Your projects
            <Progress value={50} color="light-green" />
          </h1>
          <Link to="/projects/1/">
            <ProjectCardMin />
          </Link>
          <Link to="/projects/1/">
            <ProjectCardMin />
          </Link>{' '}
          <Link to="/projects/1/">
            <ProjectCardMin />
          </Link>{' '}
          <Link to="/projects/1/">
            <ProjectCardMin />
          </Link>
        </div>

        <div className="flex flex-col gap-7">
          <div className="h-1/2 border-4 border-lightCyan rounded-3xl">
            <div className="rounded-3xl">
              <h1 className="text-center text-4xl rounded-t-3xl rounded-4xl bg-lightCyan text-white p-7">
                Recently viewed
              </h1>
              <Link to="/projects/1/">
                <ProjectCardMin />
              </Link>{' '}
            </div>
          </div>{' '}
          <div className="h-1/2 border-4 border-lightCyan rounded-3xl">
            <div className="rounded-3xl">
              <h1 className="text-center text-4xl rounded-t-3xl rounded-4xl bg-lightCyan text-white p-7">
                Top hits
              </h1>
              <Link to="/projects/1/">
                <ProjectCardMin />
              </Link>{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/2 border-4 border-lightCyan rounded-3xl">
        <div className="rounded-3xl">
          <h1 className="text-center text-4xl rounded-t-3xl rounded-4xl bg-lightCyan text-white p-7">
            Recently viewed
          </h1>
        </div>
        <div className="flex flex-row gap-4 justify-around">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
