import { FC } from 'react';
import { Link } from 'react-router-dom';

import AlgoImg from '../../../../assets/img/algo-img.png';
import CatImg from '../../../../assets/img/cat-img.png';
import { ButtonPrimary } from '../../../../components/button-primary';
import { StarsMark } from '../../../../components/stars-mark';
import { BookItemProps } from '../../types';

import styles from './book-item.module.css';

export const BookItem: FC<BookItemProps> = ({
  isStars,
  itemTitle,
  itemSubtitle,
  cover = 'algo',
  title = 'Забронировать',
  disable,
  view,
  bookId,
}) => (
  <Link className={view === 'list' ? styles.listMb : ''} to={`/books/:category/${bookId ?? 'bookId'}`}>
    {view === 'square' ? (
      <div className={styles.item} data-test-id='card'>
        <div>
          <img className={styles.item__topImg} src={cover === 'algo' ? AlgoImg : CatImg} alt='Algo Book' />
          <div>{isStars ? <StarsMark /> : <p className='bodySmall greyBlack40'>ещё нет оценок</p>}</div>
        </div>
        <div>
          <div>
            <p className='subtitleSmall'>{itemTitle}</p>
          </div>
          <div className={styles.item__subtitle}>
            <p className='bodySmall greyBlack70'>{itemSubtitle}</p>
          </div>
        </div>

        <ButtonPrimary disable={disable} isSmall={true} color={title === 'Забронирована' ? 'dark' : ''}>
          {title}
        </ButtonPrimary>
      </div>
    ) : (
      <div className={styles.itemList} data-test-id='card'>
        <img className={styles.listImg} src={cover === 'algo' ? AlgoImg : CatImg} alt='Algo Book' />
        <div className={styles.listWidth}>
          <div className={styles.listTop}>
            <p className={styles.listTitle}>{itemTitle}</p>
            <div className={styles.item__subtitle}>
              <p className='bodyLarge greyBlack70'>{itemSubtitle}</p>
            </div>
          </div>
          <div className={styles.listBottom}>
            <div className={styles.mark}>
              {isStars ? <StarsMark /> : <p className='bodySmall greyBlack40'>ещё нет оценок</p>}
            </div>
            <ButtonPrimary disable={disable} isSmall={true} color={title === 'Забронирована' ? 'dark' : ''}>
              {title}
            </ButtonPrimary>
          </div>
        </div>
      </div>
    )}
  </Link>
);
