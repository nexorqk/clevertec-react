import { BookContent } from './components';

import styles from './main-page.module.css';

export const MainPage = () => (
  <section className={styles.main}>
    <div className={styles.mainContent}>
      <BookContent />
    </div>
  </section>
);
