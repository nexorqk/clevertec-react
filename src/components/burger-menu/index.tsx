import { useState } from 'react';
import classNames from 'classnames';

import { MenuView } from '../../types';
import { NavigationMenu } from '../navigation-menu';

import styles from './burger-menu.module.css';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenuMode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button
        data-test-id='button-burger'
        type='button'
        onClick={toggleMenuMode}
        className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
        // className={classNames(styles.burgerButton, { visible: styles.open })}
      >
        <div className={classNames(styles.burgerLine, styles.topLine)} />
        <div className={classNames(styles.burgerLine, styles.middleLine)} />
        <div className={classNames(styles.burgerLine, styles.bottomLine)} />
      </button>
      {isOpen && <NavigationMenu mode={MenuView.BURGER} />}
    </div>
  );
};
