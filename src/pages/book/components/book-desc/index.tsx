import { FC } from 'react';
import DesktopPreviewCat from 'assets/img/desktop-preview-cat.png';
import classNames from 'classnames';
import { ButtonPrimary, CustomSwiper } from 'components';

import DesktopPreviewAlgos from '../../../../assets/img/desktop-preview-algos.png';
import { BookDescProps } from '../../types';

import styles from './book-desc.module.css';

export const BookDesc: FC<BookDescProps> = ({ bookData }) => (
  <div className={styles.bookDesc}>
    <div className={styles.routText}>
      <div className='wrapper'>
        <p className='bodySmall greyBlack40'>
          Бизнес книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
        </p>
      </div>
    </div>
    <div className='wrapper'>
      <div className={styles.bookSection}>
        {Array.isArray(bookData?.img) ? (
          <div className={styles.customSwiper}>
            <CustomSwiper />
          </div>
        ) : (
          <img
            className={styles.bookImg}
            src={bookData?.img === 'algo' ? DesktopPreviewAlgos : DesktopPreviewCat}
            alt='Preview Algos'
          />
        )}
        <div className={styles.textRight}>
          <div className={styles.titleText}>
            <p className={classNames('h3', styles.titleH)}>{bookData?.itemTitle}</p>
          </div>
          <div className={styles.subtitleText}>
            <p className={classNames('h5 greyBlack40', styles.subtitleH)}>{bookData?.itemSubtitle}</p>
          </div>
          <div className={styles.button}>
            <ButtonPrimary isSmall={false}>Забронировать</ButtonPrimary>
          </div>
          <div className={styles.about}>
            <div className={styles.aboutTitle}>
              <p className='h5'>О книге</p>
            </div>
            <div className={styles.aboutDesc}>
              <p className='bodyLarge'>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время?
              </p>
              <p className='bodyLarge'>&nbsp;</p>
              <p className='bodyLarge'>
                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                алгоритмы — это веселое и увлекательное занятие.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about_768}>
        <div className={styles.aboutTitle}>
          <p className='h5'>О книге</p>
        </div>
        <div className={styles.aboutDesc}>
          <p className='bodyLarge'>
            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
            решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
            изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
            время?
          </p>
          <p className='bodyLarge'>&nbsp;</p>
          <p className='bodyLarge'>
            Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
            алгоритмы — это веселое и увлекательное занятие.
          </p>
        </div>
      </div>
    </div>
  </div>
);
