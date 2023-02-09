import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { BookListDummy } from '../../constants/dummy-data';

import { BookDesc, BookRating } from './components';
import { ScrollToTop } from './utils';

import styles from './book-page.module.css';

export const BookPage = () => {
  ScrollToTop();
  const { bookId } = useParams();

  const [bookData] = useState(BookListDummy.find((el) => el.bookId === bookId));

  return (
    <section className={styles.book}>
      <BookDesc bookData={bookData} />
      <BookRating />
    </section>
  );
};
