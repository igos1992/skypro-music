import AppRoutes from './routes';

function App() {

  const handleLogin = () => {
    localStorage.setItem('user', 'user');
  }

  const handleLogout = () => {
    localStorage.setItem('user', '');
  }

  return (
    <AppRoutes handleLogin={handleLogin} handleLogout={handleLogout} />
  )
}

export default App;
