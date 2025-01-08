import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '@/components/molecules/navbar';

export const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
