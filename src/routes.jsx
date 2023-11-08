import { Routes, Route } from "react-router-dom";
import { AuthorizationLoginPage } from './pages/main/AuthorizationLoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { NotFound } from './pages/not-found/NotFound';
import { MainPage } from './pages/MainPage/MainPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { ProfileCollectionPages } from './pages/ArrayCollectionPages/ProfileCollectionPages/ProfileCollectionPages';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';

const AppRoutes = ({
  loading,
  arrayMusicAll,
  addTodoError,
  handleCurrentMusic,
  currentMusic,
  setCurrentMusic,
}) => {

  return (
    <Routes>
      <Route path="/login" element={<AuthorizationLoginPage />} />
      <Route path="/RegistrationPage" element={<RegistrationPage />} />
      <Route element={<ProtectedRoute
      />}>
        <Route
          path="/"
          element={<MainPage
            loading={loading}
            arrayMusicAll={arrayMusicAll}
            addTodoError={addTodoError}
            handleCurrentMusic={handleCurrentMusic}
            currentMusic={currentMusic}
            setCurrentMusic={setCurrentMusic}
          />} />
        <Route path="/FavoritesPage" element={<FavoritesPage />} />
        <Route path="/ProfileCollectionPages/:id" element={<ProfileCollectionPages />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;