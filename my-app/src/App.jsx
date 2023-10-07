import './App.css';
import MainNavMenu from './components/Main Nav Menu/MainNavMenu';
import MainSidebar from './components/Main Sidebar/MainSidebar';
import MainCenterBlock from './components/Main Center Block/MainCenterBlock';
import Bar from './components/Bar/Bar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <MainNavMenu />
            <MainCenterBlock />
            <MainSidebar />
          </main>
          <Bar />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
