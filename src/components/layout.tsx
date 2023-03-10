import { Outlet } from 'react-router-dom';

import { Footer } from './footer';
import { Header } from './header';

export const Layout = () => (
  <div className='layout-main'>
    <Header />
    <Outlet />
    <Footer />
  </div>
);
