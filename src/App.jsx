import { useEffect, useState } from 'react';
import AppRoutes from './routes';
import { getTodosMusicAll } from './api';
import { UserContext } from './components/Usercontext/Usercontext';

function App() {

  const [user, setUser] = useState(localStorage.getItem('user'));

  const changingUserInformation = () => {
   
    setUser(localStorage.removeItem('user'))
  }

  console.log(localStorage.getItem('user'))
  console.log(user)

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
    <UserContext.Provider
      value={{
        userData: user,
        changingUserInformation,
        changingUserData: setUser
      }}>
      <AppRoutes
        loading={loading}
        arrayMusicAll={arrayMusicAll}
        addTodoError={addTodoError}
        currentMusic={currentMusic}
        setCurrentMusic={setCurrentMusic}
        handleCurrentMusic={handleCurrentMusic}
      />
    </UserContext.Provider>
  )
}

export default App;
