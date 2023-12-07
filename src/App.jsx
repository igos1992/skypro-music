import { useState } from 'react';
import AppRoutes from './routes';
import { UserContext } from './Usercontext/Usercontext';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const changingUserInformation = () => {
    setUser(localStorage.removeItem('user'))
    window.location.pathname = '/login'
  }

  return (
    <UserContext.Provider
      value={{
        userData: user,
        changingUserInformation,
        changingUserData: setUser,
      }}>
      <AppRoutes
      />
    </UserContext.Provider>
  )
}

export default App;