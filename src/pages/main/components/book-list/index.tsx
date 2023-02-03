import { FC } from 'react';

import { BookListProps } from '../../types';
import { BookItem } from '../book-item';

import styles from './book-list.module.css';

export const BookList: FC<BookListProps> = ({ view }) => (
  <div className={view === 'square' ? styles.bookItems : styles.bookItemsList}>
    <BookItem
      view={view}
      isStars={false}
      itemTitle='Грокаем алгоритмы. Иллюстрированное пособие для програ...'
      itemSubtitle='Адитья Бхаргава, 2019'
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. Иллюстрированное '
      itemSubtitle='Адитья Бхаргава, 2019'
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. '
      itemSubtitle='Адитья Бхаргава, 2019'
      title='Занята до 03.05'
      disable={true}
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. Иллюстрированное пособие для програ...'
      itemSubtitle='Адитья Бхаргава, 2019'
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. Иллюстрированное пособие для програ...'
      itemSubtitle='Адитья Бхаргава, Патрик Нимейер, 2019'
      title='Забронирована'
      disable={true}
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. Иллюстрированное '
      itemSubtitle='Адитья Бхаргава, Патрик Нимейер, 2019'
      cover='cat'
      title='Занята до 23.04'
      disable={true}
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. '
      itemSubtitle='Адитья Бхаргава, Патрик Нимейер, 2019'
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. Иллюстрированное пособие для програ...'
      itemSubtitle='Адитья Бхаргава, Патрик Нимейер, 2019'
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. Иллюстрированное пособие для програ...'
      itemSubtitle='Адитья Бхаргава, 2019'
    />
    <BookItem
      view={view}
      isStars={true}
      itemTitle='Грокаем алгоритмы. Иллюстрированное пособие для програ...'
      itemSubtitle='Адитья Бхаргава, 2019'
      cover='cat'
    />
  </div>
);
