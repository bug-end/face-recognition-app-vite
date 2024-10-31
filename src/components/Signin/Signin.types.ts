import { User } from '@utils/types/user';

export interface SigninProps {
  onRouteChange: (route: string) => void;
  loadUser: (user: User) => void;
}
