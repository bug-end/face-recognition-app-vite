import { Button } from '@components/Button/Button';
import { PageRow } from '@components/PageRow/PageRow';

import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.types';

export const Navigation: React.FC<NavigationProps> = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav className={styles.navigationWrapper}>
      <PageRow>
        <div className={styles.navigation}>
          {isSignedIn ? (
            <Button onClick={() => onRouteChange('signout')} variant='secondary'>
              Sign Out
            </Button>
          ) : (
            <>
              <Button onClick={() => onRouteChange('signin')} variant='secondary'>
                Sign In
              </Button>
              <Button onClick={() => onRouteChange('register')} variant='secondary'>
                Register
              </Button>
            </>
          )}
        </div>
      </PageRow>
    </nav>
  );
};
