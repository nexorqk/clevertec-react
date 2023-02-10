import { useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as ChevronDownIcon } from '../../../../assets/icons/chevron-down-icon.svg';
import { ReactComponent as ChevronUpIcon } from '../../../../assets/icons/chevron-up-icon.svg';
import { ButtonPrimary, StarsMark } from '../../../../components';
import { firstTable, secondTable } from '../../constants';
import { UserComment } from '../user-comment';

import styles from './book-rating.module.css';

export const BookRating = () => {
  const [isChevronToggle, setChevronToggle] = useState<boolean>(false);

  const toggleBetweenChevron = () => {
    setChevronToggle(!isChevronToggle);
  };

  return (
    <div className='wrapper'>
      <div className={styles.commonRating}>
        <div className={styles.ratingText}>
          <p className='h5'>Рейтинг</p>
        </div>
        <div className={styles.ratingStars}>
          <div className={styles.raitingStarsStars}>
            <StarsMark />
          </div>
          <p className='h5'>4.3</p>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.detailTitle}>
          <p className='h5'>Подробная информация</p>
        </div>
        <div className={styles.detailTable} />
      </div>
      <table className={styles.table}>
        <tbody className={styles.tbody1}>
          {firstTable.map(({ id, title, subtitle }) => (
            <tr className={styles.tableLine} key={id}>
              <td className={classNames('subtitleLarge greyBlack40', styles.tableTitle)}>{title}</td>
              <td className={styles.tableSubtitle}>{subtitle}</td>
            </tr>
          ))}
        </tbody>
        <tbody className={styles.tobdy2}>
          {secondTable.map(({ id, title, subtitle }) => (
            <tr className={styles.tableLine} key={id}>
              <td className={classNames('subtitleLarge greyBlack40', styles.tableTitle)}>{title}</td>
              <td className={styles.tableSubtitle}>{subtitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.reviews}>
        <div className={styles.reviewsTitle}>
          <p className={classNames('h5', styles.reviewsTitleT)}>Отзывы</p>
          <p className={classNames(styles.reviewsTitleS, 'greyBlack40')}>2</p>
          <div
            data-test-id='button-hide-reviews'
            onClick={toggleBetweenChevron}
            className={styles.reviewsTitleChevron}
            role='presentation'
          >
            {isChevronToggle ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </div>
        </div>
        <div className={classNames(styles.userComment, { toggleChevron: isChevronToggle })}>
          <UserComment name='Иван Иванов' date='5 января 2019' />
          <UserComment
            name='Николай Качков'
            date='20 июня 2018'
            comment='Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'
          />
          <UserComment name='Екатерина Беляева' date='18 февраля 2018' />
        </div>
      </div>
      <div className={styles.reviewButton}>
        <ButtonPrimary data-test-id='button-rating' isSmall={false}>
          оценить книгу
        </ButtonPrimary>
      </div>
    </div>
  );
};
