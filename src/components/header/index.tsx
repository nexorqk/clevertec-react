import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo-icon.svg';
import { ReactComponent as LogoText } from '../../assets/icons/logo-text.svg';
import UserAvatar from '../../assets/img/user-avatar.png';
import { BurgerMenu } from '../burger-menu';

import styles from './header.module.css';

export const Header = () => (
  <div className={classNames(styles.header, 'wrapper')}>
    <BurgerMenu />
    <Link to='/' className={styles.logo}>
      <LogoIcon className={styles.logo__icon} />
      <LogoText className={styles.logo__text} />
    </Link>
    <Link to='/' className='h3'>
      Библиотека
    </Link>
    <div className={styles.user}>
      <div className={styles.user__text}>
        <p className='subtitleSmall'>Привет, Иван!</p>
      </div>
      <div className='user__avatar'>
        <img src={UserAvatar} alt='User Avatar' />
      </div>
    </div>
  </div>
);
