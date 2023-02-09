import { FC } from 'react';
import classNames from 'classnames';

import { ActiveLink } from '../active-link';

import { navigationItems } from './constants';

import styles from './navigation-menu.module.css';

export const NavigationMenu: FC<{ mode: string; setOpen?: (value: boolean) => void }> = ({ mode, setOpen }) => {
  if (mode === 'burger') {
    return (
      <div className={classNames(styles.main, styles.mainOpen)}>
        <ActiveLink data-test-id='burger-showcase' to='/' className={classNames('h5', styles.menuItem)}>
          Витрина книг
        </ActiveLink>
        <ul className={styles.items}>
          {navigationItems.map(({ id, path, name, count }) => (
            <ActiveLink
              onClick={() => setOpen && setOpen(false)}
              data-test-id={id === 1 ? 'burger-books' : ''}
              className={styles.item}
              key={id}
              to={path}
            >
              <p className='bodyLarge'>
                {name}
                <span className={styles.count}>{count}</span>
              </p>
            </ActiveLink>
          ))}
        </ul>
        <ActiveLink
          onClick={() => setOpen && setOpen(false)}
          data-test-id='burger-terms'
          className={classNames('h5', styles.menuItem)}
          to='/terms'
        >
          Правила пользования
        </ActiveLink>
        <ActiveLink
          onClick={() => setOpen && setOpen(false)}
          data-test-id='burger-contract'
          className='h5'
          to='/contract'
        >
          Договор оферты
        </ActiveLink>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <ActiveLink data-test-id='navigation-showcase' to='/books/all' className={classNames('h5', styles.menuItem)}>
        Витрина книг
      </ActiveLink>
      <ul className={styles.items}>
        {navigationItems.map(({ id, path, name, count }) => (
          <ActiveLink key={id} to={path} data-test-id={id === 1 ? 'navigation-books' : ''} className={styles.item}>
            <span className='bodyLarge'>
              {name}
              <span className={styles.count}>{count}</span>
            </span>
          </ActiveLink>
        ))}
      </ul>
      <ActiveLink data-test-id='navigation-terms' className={classNames('h5', styles.menuItem)} to='/terms'>
        Правила пользования
      </ActiveLink>
      <ActiveLink data-test-id='navigation-contract' className='h5' to='/contract'>
        Договор оферты
      </ActiveLink>
    </div>
  );
};
