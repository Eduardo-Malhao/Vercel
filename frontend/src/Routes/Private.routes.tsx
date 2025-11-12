import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  // return Boolean(localStorage.getItem('Authentication-Token'));
  return true;
};

const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;