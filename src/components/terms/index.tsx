import { FC } from 'react';
import classNames from 'classnames';

import { termsList } from './constants';
import { RulesList } from './rules-list';

import styles from './terms.module.css';

type TermsProps = {
  contentView: string;
};

export const Terms: FC<TermsProps> = ({ contentView }) => {
  const title = contentView === 'terms' ? 'Правила пользования' : 'Договор оферты';

  return (
    <div className={styles.main}>
      <p className={classNames('h3', styles.title)}>{title}</p>
      <RulesList items={termsList} />
    </div>
  );
};
