import { FC } from 'react';
import classNames from 'classnames';

import ReviewsAvatar from '../../../../assets/img/reviews-avatar.png';
import { StarsMark } from '../../../../components';
import { UserCommentProps } from '../../types';

import styles from './user-comment.module.css';

export const UserComment: FC<UserCommentProps> = ({ name, comment = '', date }) => (
  <div className={styles.main}>
    <div className={styles.top}>
      <img className={styles.avatar} src={ReviewsAvatar} alt='' />
      <div className={styles.name}>
        <p className='bodyLarge greyBlack70'>{name}</p>
      </div>
      <div className={styles.date}>
        <p className='bodyLarge greyBlack70'>{date}</p>
      </div>
    </div>
    <div className={classNames(styles.bottom, comment ? styles.bottomMargin : '')}>
      <StarsMark />
    </div>
    <div className={styles.comment}>
      <span>{comment}</span>
    </div>
  </div>
);
