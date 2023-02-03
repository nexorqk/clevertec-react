import React from 'react';
import classNames from 'classnames';

import styles from './button-primary.module.css';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {
  isSmall: boolean;
  disable?: boolean;
  color?: string;
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ children, isSmall, disable, color }) => {
  let variant = 'buttonSmall';

  variant = isSmall ? variant : 'buttonLarge';

  return (
    <button
      className={classNames(
        disable ? styles.disableButton : styles.button,
        variant === 'buttonSmall' ? styles.buttonSmall : styles.buttonLarge
      )}
      type='button'
    >
      <p
        className={
          disable ? classNames(styles.disable, 'greyBlack40', color) : classNames(variant, 'white', styles.orange)
        }
      >
        {children}
      </p>
    </button>
  );
};
