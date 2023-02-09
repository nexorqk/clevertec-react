import { FC } from 'react';

import { BookListDummy } from '../../../../constants/dummy-data';
import { BookListProps } from '../../types';
import { BookItem } from '../book-item';

import styles from './book-list.module.css';

export const BookList: FC<BookListProps> = ({ view }) => (
  <div className={view === 'square' ? styles.bookItems : styles.bookItemsList}>
    {BookListDummy.map((el) => (
      <BookItem
        key={el.id}
        view={view}
        isStars={el.isStar}
        itemTitle={el.itemTitle}
        itemSubtitle={el.itemSubtitle}
        bookId={el.bookId}
      />
    ))}
  </div>
);
