import { Routes, Route } from "react-router-dom";
import { AuthorizationLoginPage } from './pages/main/AuthorizationLoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { NotFound } from './pages/not-found/NotFound';
import { MainPage } from './pages/MainPage/MainPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { ProfileCollectionPages } from './pages/ArrayCollectionPages/ProfileCollectionPages/ProfileCollectionPages';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';

const AppRoutes = ({ handleLogin, handleLogout }) => {
  return (
    <Routes>
      <Route path="/AuthorizationLoginPage" element={<AuthorizationLoginPage handleLogin={handleLogin} />} />
      <Route path="/RegistrationPage" element={<RegistrationPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage handleLogout={handleLogout} />} />
        <Route path="/FavoritesPage" element={<FavoritesPage />} />
        <Route path="/ProfileCollectionPages/:id" element={<ProfileCollectionPages />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;