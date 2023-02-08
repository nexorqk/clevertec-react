import { FC } from 'react';
import classNames from 'classnames';

import { termsList } from './constants';
import { RulesList } from './rules-list';
import { TermsProps, TermsTitle } from './types';

import styles from './terms.module.css';

export const Terms: FC<TermsProps> = ({ contentView }) => {
  const title = contentView === 'terms' ? TermsTitle.TERMS : TermsTitle.CONTRACT;

  return (
    <div className={styles.main}>
      <p className={classNames('h3', styles.title)}>{title}</p>
      <RulesList items={termsList} />
    </div>
  );
};
