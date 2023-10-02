import './App.css';
import MainNavMenu from './components/MainNavMenu';
import MainSidebar from './components/MainSidebar';
import MainCenterBlock from './components/MainCenterBlock';
import Bar from './components/Bar';
import Footer from './components/Footer'

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
