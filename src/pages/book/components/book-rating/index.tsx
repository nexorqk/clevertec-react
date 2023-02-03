import { ButtonPrimary, StarsMark } from '../../../../components';
import { firstTable, secondTable } from '../../constants';
import { UserComment } from '../user-comment';

import styles from './book-rating.module.css';

export const BookRating = () => (
  <div className='wrapper'>
    <div className={styles.commonRating}>
      <div className={styles.ratingText}>
        <p className='h5'>Рейтинг</p>
      </div>
      <div className={styles.ratingStars}>
        <StarsMark />
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
        <tr className={styles.mainLine}>
          {firstTable.map(({ id, title }) => (
            <th className='subtitleLarge greyBlack40' key={id}>
              {title}
            </th>
          ))}
        </tr>
        <tr className={styles.secondaryLine}>
          {firstTable.map(({ id, subtitle }) => (
            <td key={id} className={styles.longText}>
              {subtitle}
            </td>
          ))}
        </tr>
      </tbody>
      <tbody className={styles.tbody2}>
        <tr className={styles.mainLine}>
          {secondTable.map(({ id, title }) => (
            <th className='subtitleLarge greyBlack40' key={id}>
              {title}
            </th>
          ))}
        </tr>
        <tr className={styles.secondaryLine}>
          {secondTable.map(({ id, subtitle }) => (
            <td key={id} className={styles.longText}>
              {subtitle}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
    <div className={styles.reviews}>
      <div className={styles.reviewsTitle}>
        <p className='h5'>Отзывы</p>
        <p className='greyBlack40'>2</p>
      </div>
      <div className={styles.userComment}>
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
      <ButtonPrimary isSmall={false}>оценить книгу</ButtonPrimary>
    </div>
  </div>
);
