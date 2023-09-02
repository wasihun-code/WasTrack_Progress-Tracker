/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import Header from './components/LayoutComponents/Header';
import Footer from './components/LayoutComponents/Footer';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
