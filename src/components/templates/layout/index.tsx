import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '@/components/templates/layout/navbar';

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
