import { FC } from 'react';
import classNames from 'classnames';

import { RulesListProps } from '../types';

import styles from './rules-list.module.css';

export const RulesList: FC<RulesListProps> = ({ items }) => (
  <div>
    <ul className={styles.items}>
      {items.map((item) => (
        <li className={classNames(styles.ruleItem, 'bodyLarge', item?.style ?? 'lightWeight')} key={item.id}>
          {item.title}
          {item.children && <RulesList items={item.children} />}
        </li>
      ))}
    </ul>
  </div>
);
