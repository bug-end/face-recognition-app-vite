export interface SigninProps {
  onRouteChange: (route: string) => void;
  loadUser: (user: any) => void; // TODO add type
}
