import { User } from '@utils/types/user';

export interface RegisterProps {
  onRouteChange: (route: string) => void;
  loadUser: (user: User) => void;
}
