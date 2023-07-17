import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { PublicRoutesprops } from './interfaces';

export const PublicRoutes = ({
  isLogged,
  redirectPath = '/dashboard/home',
}: PublicRoutesprops) => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  if (isLogged) {
    const urlRedirect = redirect
      ? `${redirectPath}?id=${redirect}`
      : redirectPath;
    return <Navigate to={urlRedirect} replace />;
  }

  return <Outlet />;
};
