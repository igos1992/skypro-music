import { useEffect, useState } from 'react';
import AppRoutes from './routes';
import { getTodosMusicAll } from './api';

function App() {

  const handleLogin = () => {
    localStorage.setItem('user', 'user');
  }
  const handleLogout = () => {
    localStorage.setItem('user', '');
  }

  const [loading, setLoading] = useState(false);
  const [arrayMusicAll, setArrayMusicAll] = useState([]);
  const [addTodoError, setAddTodoError] = useState(null);
  const [currentMusic, setCurrentMusic] = useState(null);

  useEffect(() => {
    getTodosMusicAll()
      .then((arrayMusicAll) => {
        setArrayMusicAll(arrayMusicAll)
      })
      .catch((error) => {
        setAddTodoError(`Не удалось загрузить плейлист, попробуйте позже: ${error.message}`)
      })

    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);

  }, []);

  const handleCurrentMusic = (music) => {
    setCurrentMusic(music)
  }

  return (
    <AppRoutes
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      loading={loading}
      arrayMusicAll={arrayMusicAll}
      addTodoError={addTodoError}
      currentMusic={currentMusic}
      setCurrentMusic={setCurrentMusic}
      handleCurrentMusic={handleCurrentMusic}
    />
  )
}

export default App;
