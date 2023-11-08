import { useEffect, useState } from 'react';
import AppRoutes from './routes';
import { useDispatch } from 'react-redux';
import { UserContext } from './Usercontext/Usercontext';
import { getTodosMusicAll } from './api';
import { setAllTracks } from './redux/music/playerBarSlice';


function App() {

  const [user, setUser] = useState(localStorage.getItem('user'));
  const [loading, setLoading] = useState(false);
  const [addTodoError, setAddTodoError] = useState(null);
  const dispatch = useDispatch();

  const changingUserInformation = () => {
    setUser(localStorage.removeItem('user'))
  }

  useEffect(() => {
    getTodosMusicAll()
      .then((allTracks) => {
        dispatch(setAllTracks(allTracks))
      })
      .catch((error) => {
        setAddTodoError(`Не удалось загрузить плейлист, попробуйте позже: ${error.message}`)
      })
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData: user,
        changingUserInformation,
        changingUserData: setUser
      }}>
      <AppRoutes
        loading={loading}
        addTodoError={addTodoError}
      />
    </UserContext.Provider>
  )
}

export default App;
