import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as ChevronDownIcon } from '../../assets/icons/chevron-down-icon.svg';
import { ReactComponent as ChevronUpIcon } from '../../assets/icons/chevron-up-icon.svg';

import { navigationItems } from './constants';

import styles from './navigation-menu.module.css';

export const NavigationMenu: FC<{ mode: string; setOpen?: (value: boolean) => void }> = ({ mode, setOpen }) => {
  const location = useLocation();

  const [toggleMenu, setToggleMenu] = useState(true);

  const booksActive = location.pathname.split('/')[1] === 'books';
  const termsActive = location.pathname.split('/')[1] === 'terms';
  const contractActive = location.pathname.split('/')[1] === 'contract';

  const toggleMenuFunc = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    if (termsActive || contractActive) {
      setToggleMenu(false);
    }
  }, [location, termsActive, contractActive]);

  if (mode === 'burger') {
    return (
      <div className={classNames(styles.main, styles.mainOpen)}>
        <NavLink
          data-test-id='burger-showcase'
          onClick={(e) => toggleMenuFunc(e)}
          to='/'
          className={classNames('h5', styles.menuItem, { borderBottom: booksActive })}
        >
          Витрина книг
          {toggleMenu ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </NavLink>
        <ul className={classNames(styles.items, { toggleChevron: !toggleMenu })}>
          {navigationItems.map(({ id, path, name, count }) => (
            <li key={id}>
              <NavLink
                onClick={() => setOpen && setOpen(false)}
                data-test-id={id === 1 ? 'burger-books' : ''}
                className={classNames(styles.item)}
                to={path}
              >
                <span className='bodyLarge'>
                  {name}
                  <span className={styles.count}>{count}</span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink
          onClick={() => setOpen && setOpen(false)}
          data-test-id='burger-terms'
          className={classNames('h5', styles.menuItem, { borderBottom: termsActive })}
          to='/terms'
        >
          Правила пользования
        </NavLink>
        <NavLink
          onClick={() => setOpen && setOpen(false)}
          data-test-id='burger-contract'
          className={classNames('h5', styles.menuItem, { borderBottom: contractActive })}
          to='/contract'
        >
          Договор оферты
        </NavLink>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <NavLink
        data-test-id='navigation-showcase'
        onClick={(e) => toggleMenuFunc(e)}
        to='/books/all'
        className={classNames('h5', styles.menuItem, { borderBottom: booksActive })}
      >
        Витрина книг
        {toggleMenu ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </NavLink>
      <ul className={classNames(styles.items, { toggleChevron: !toggleMenu })}>
        {navigationItems.map(({ id, path, name, count }) => (
          <li key={id}>
            <NavLink to={path} data-test-id={id === 1 ? 'navigation-books' : ''} className={styles.item}>
              <span className='bodyLarge'>
                {name}
                <span className={styles.count}>{count}</span>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink
        onClick={() => setToggleMenu(false)}
        data-test-id='navigation-terms'
        className={classNames('h5', styles.menuItem, { borderBottom: termsActive })}
        to='/terms'
      >
        Правила пользования
      </NavLink>
      <NavLink
        onClick={() => setToggleMenu(false)}
        data-test-id='navigation-contract'
        className={classNames('h5', { borderBottom: contractActive })}
        to='/contract'
      >
        Договор оферты
      </NavLink>
    </div>
  );
};
