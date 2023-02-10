import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { MenuView } from '../../types';
import { NavigationMenu } from '../navigation-menu';

import styles from './burger-menu.module.css';

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!containerRef.current) {
      return;
    }

    if (!containerRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenuMode = () => {
    setOpen(!isOpen);
  };

  return (
    <div ref={containerRef} className={styles.burgerMenu}>
      <button
        data-test-id='button-burger'
        type='button'
        onClick={toggleMenuMode}
        className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
      >
        <div className={classNames(styles.burgerLine, styles.topLine)} />
        <div className={classNames(styles.burgerLine, styles.middleLine)} />
        <div className={classNames(styles.burgerLine, styles.bottomLine)} />
      </button>
      {isOpen && <NavigationMenu setOpen={setOpen} mode={MenuView.BURGER} />}
    </div>
  );
};
