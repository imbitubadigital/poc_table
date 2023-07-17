import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { PrivateRoutesprops } from './interfaces';

export const PrivateRoutes = ({
  isLogged,
  redirectPath = '/',
}: PrivateRoutesprops) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  if (!isLogged) {
    const urlRedirect = id ? `${redirectPath}?redirect=${id}` : redirectPath;
    return <Navigate to={urlRedirect} replace />;
  }
  return <Outlet />;
};
