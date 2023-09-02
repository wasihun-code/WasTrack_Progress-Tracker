import { Link } from 'react-router-dom';

/* eslint-disable react/react-in-jsx-scope */
export default function Header() {
  return (
    <nav className="flex flex-row mx-auto p-3 m-2">
      <h1 className="font-bold text-2xl text-green-500">WasTrack</h1>
      <ul className="flex flex-row text-center space-x-6 mx-auto items-center">
        <Link to="/">Home </Link>
        <Link to="/projects/1">Project</Link>
        <Link to="#">Contact us </Link>
        <Link to="/about">About us</Link>
      </ul>
      <ul className="flex flex-row text-center space-x-6 justify-end mr-5">
        <Link className="bg-mediumCyan text-white p-3 rounded-2xl" to="/">
          Login
        </Link>
        <Link className="text-lightCyan bg-lightGreyish p-3 rounded-2xl" to="/">
          Register
        </Link>
      </ul>
    </nav>
  );
}
