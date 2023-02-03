import { Outlet } from 'react-router-dom';

import { NavigationMenu } from '../navigation-menu';

import styles from './layout-main-page.module.css';

export const LayoutMainPage = () => (
  <div className={styles.main}>
    <NavigationMenu />
    <Outlet />
  </div>
);
