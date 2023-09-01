/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="mx-auto border-2 mt-2 p-2">
      <h1 className="text-3xl text-red-300">WasTrak : Progress Tracker</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
