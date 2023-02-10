import { useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as CloseSearchIcon } from '../../../../assets/icons/close-search.svg';
import { ReactComponent as RaitingIcon } from '../../../../assets/icons/raiting-icon.svg';
import { ReactComponent as SearchInputIcon } from '../../../../assets/icons/search-icon.svg';
import { ReactComponent as ViewBurgerIcon } from '../../../../assets/icons/view-burger.svg';
import { ReactComponent as ViewSquareIcon } from '../../../../assets/icons/view-squares.svg';
import { BookList } from '../book-list';

import styles from './book-content.module.css';

export const BookContent = () => {
  const [view, setView] = useState<string>('square');

  const [displayIcons, setDisplayIcons] = useState(true);
  const [displayInput, setDisplayInput] = useState(false);

  const handleSearchClick = () => {
    setDisplayIcons(false);
    setDisplayInput(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.topInputs}>
          <form className={styles.search} action=''>
            <div
              data-test-id='button-search-open'
              role='presentation'
              onClick={handleSearchClick}
              className={styles.searchIcon}
            >
              <SearchInputIcon />
            </div>
            <input
              data-test-id='input-search'
              className={classNames(styles.searchInput, displayInput ? styles.wide : '')}
              type='text'
              placeholder='Поиск книги или автора…'
            />
            {displayInput ? (
              <button
                onClick={() => setDisplayInput(false)}
                className={classNames(styles.searchCloseIcon, displayIcons === false ? styles.open : '')}
                data-test-id='button-search-close'
                type='button'
              >
                <CloseSearchIcon />
              </button>
            ) : (
              ''
            )}
          </form>
          <button className={styles.raitingButton} type='button'>
            <span className={styles.raitingIcon}>
              <RaitingIcon />
            </span>
            <span className={classNames('bodySmall greyBlack40', styles.raitingText)}> По рейтингу</span>
          </button>
        </div>
        <div className={styles.viewSection}>
          <button
            data-test-id='button-menu-view-window'
            type='button'
            onClick={() => setView('square')}
            className={classNames(styles.viewCircle, view === 'square' ? styles.viewActive : '')}
          >
            <ViewSquareIcon />
          </button>
          <button
            data-test-id='button-menu-view-list'
            type='button'
            onClick={() => setView('list')}
            className={classNames(styles.viewCircle, view === 'list' ? styles.viewActive : '')}
          >
            <ViewBurgerIcon />
          </button>
        </div>
      </div>
      <BookList view={view} />
    </div>
  );
};
