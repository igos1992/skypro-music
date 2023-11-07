import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = '/' }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />;
};