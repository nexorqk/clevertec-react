import { FC } from 'react';
import classNames from 'classnames';

import { TermList } from '../constants';

import styles from './rules-list.module.css';

type RuleListProps = {
  items: TermList;
};

export const RulesList: FC<RuleListProps> = ({ items }) => (
  <div>
    <ul className={styles.items}>
      {items.map((item) => (
        <li
          className={classNames(styles.ruleItem, 'bodyLarge', item?.style ?? 'lightWeight')}
          key={item.title.substring(0, 8)}
        >
          {item.title}
          {item.children && <RulesList items={item.children} />}
        </li>
      ))}
    </ul>
  </div>
);
