import styles from './PageRow.module.scss';
import { PageRowProps } from './PageRow.types';

export const PageRow: React.FC<PageRowProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
