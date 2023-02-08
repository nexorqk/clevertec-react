import React, { FC } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { navigationItems } from './constants';

import styles from './navigation-menu.module.css';

export const NavigationMenu: FC<{ mode: string }> = ({ mode }) => {
  const location = useLocation();

  const isActive2 = location.pathname;

  if (mode === 'burger') {
    return (
      <div className={classNames(styles.main, styles.mainOpen)}>
        <NavLink data-test-id='burger-showcase' to='/' className={classNames('h5', styles.menuItem)}>
          Витрина книг
        </NavLink>
        <ul className={styles.items}>
          {navigationItems.map(({ id, path, name, count }) => (
            <Link key={id} to={path}>
              <li data-test-id={id === 1 ? 'burger-books' : ''} className={styles.item}>
                <p className='bodyLarge'>
                  {name}
                  <span className={styles.count}>{count}</span>
                </p>
              </li>
            </Link>
          ))}
        </ul>
        <Link data-test-id='burger-terms' className={classNames('h5', styles.menuItem)} to='/terms'>
          Правила пользования
        </Link>
        <Link data-test-id='burger-contract' className='h5' to='/contract'>
          Договор оферты
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <NavLink data-test-id='navigation-showcase' to='/' className={classNames('h5', styles.menuItem)}>
        Витрина книг
      </NavLink>
      <ul className={styles.items}>
        {navigationItems.map(({ id, path, name, count }) => (
          <Link key={id} to={path}>
            <li data-test-id={id === 1 ? 'navigation-books' : ''} className={styles.item}>
              <p className='bodyLarge'>
                {name}
                <span className={styles.count}>{count}</span>
              </p>
            </li>
          </Link>
        ))}
      </ul>
      <Link data-test-id='navigation-terms' className={classNames('h5', styles.menuItem)} to='/terms'>
        Правила пользования
      </Link>
      <Link data-test-id='navigation-contract' className='h5' to='/contract'>
        Договор оферты
      </Link>
    </div>
  );
};
