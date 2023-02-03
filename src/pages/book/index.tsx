import { BookDesc, BookRating } from './components';
import { ScrollToTop } from './utils';

import styles from './book-page.module.css';

export const BookPage = () => {
  ScrollToTop();

  return (
    <section className={styles.book}>
      <BookDesc />
      <BookRating />
    </section>
  );
};
