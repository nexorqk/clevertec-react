import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as FacebookIcon } from '../../assets/icons/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/icon-instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/icon-linkedin.svg';
import { ReactComponent as VKIcon } from '../../assets/icons/icon-vk.svg';

import styles from './footer.module.css';

const socialMedia = [
  { id: 1, link: 'facebook.com', icon: <FacebookIcon /> },
  { id: 2, link: 'instagram.com', icon: <InstagramIcon /> },
  { id: 3, link: 'vk.com', icon: <VKIcon /> },
  { id: 4, link: 'linkedin.com', icon: <LinkedinIcon /> },
];

export const Footer = () => (
  <footer className={classNames(styles.footer, 'wrapper')}>
    <p className={classNames('bodyLarge', styles.footerText)}>© 2020-2023 Cleverland. Все права защищены.</p>
    <ul className={styles.socialMedia}>
      {socialMedia.map(({ id, link, icon }) => (
        <li key={id} className={styles.socialMedia__item}>
          <Link to={link}>{icon}</Link>
        </li>
      ))}
    </ul>
  </footer>
);
