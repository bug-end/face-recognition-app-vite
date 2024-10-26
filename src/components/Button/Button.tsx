import classNames from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const buttonClasses = cx({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
  });

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
