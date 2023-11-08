import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />;
};