import styles from './Rank.module.scss';
import { RankProps } from './Rank.types';

export const Rank: React.FC<RankProps> = ({ name, entries }) => {
  return (
    <div className={styles.rankWrapper}>
      <div className={styles.title}>{`${name}, your current entry count is...`}</div>
      <div className={styles.entries}>{entries}</div>
    </div>
  );
};
