import { Home } from '@/pages/Home';

import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes ';
import { PublicRoutes } from './PublicRoutes';

import { Copy } from '@/pages/Copy';

export function AppRoutes() {
  const isValidLogin = false;
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes isLogged={isValidLogin} />}>
        <Route index element={<Copy />} />
      </Route>
      <Route
        path="dashboard"
        element={<PrivateRoutes isLogged={isValidLogin} />}
      >
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
