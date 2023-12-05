import { Routes, Route } from "react-router-dom";
import { AuthorizationLoginPage } from './pages/main/AuthorizationLoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { NotFound } from './pages/not-found/NotFound';
import { MainPage } from './pages/MainPage/MainPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { ProfileCollectionPages } from './pages/ArrayCollectionPages/ProfileCollectionPages/ProfileCollectionPages';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';
import MainLayout from "./components/Layouts/MainLayout";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/login" element={<AuthorizationLoginPage />} />
      <Route path="/RegistrationPage" element={<RegistrationPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="FavoritesPage" element={<FavoritesPage />} />
          <Route path="ProfileCollectionPages/:id" element={<ProfileCollectionPages />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;