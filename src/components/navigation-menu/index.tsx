import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { navigationItems } from './constants';

import styles from './navigation-menu.module.css';

export const NavigationMenu = () => {
  const location = useLocation();

  const isActive2 = location.pathname;

  return (
    <div className={styles.main}>
      <NavLink to='/' className={classNames('h5', styles.menuItem)}>
        Витрина книг
      </NavLink>
      <ul className={styles.items}>
        {navigationItems.map(({ id, path, name, count }) => (
          <Link key={id} to={path}>
            <li className={styles.item}>
              <p className='bodyLarge'>
                {name}
                <span className={styles.count}>{count}</span>
              </p>
            </li>
          </Link>
        ))}
      </ul>
      <Link className={classNames('h5', styles.menuItem)} to='/terms'>
        Правила пользования
      </Link>
      <Link className='h5' to='/contract'>
        Договор оферты
      </Link>
    </div>
  );
};
