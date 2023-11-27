import { useEffect, useState } from 'react';
import AppRoutes from './routes';
import { UserContext } from './Usercontext/Usercontext';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [loading, setLoading] = useState(false);
  const changingUserInformation = () => {
    setUser(localStorage.removeItem('user'))
  }

  useEffect(() => {
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
        changingUserData: setUser,
      }}>
      <AppRoutes
        loading={loading}
      />
    </UserContext.Provider>
  )
}

export default App;