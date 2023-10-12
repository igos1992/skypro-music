import MainNavMenu from './components/Main Nav Menu/MainNavMenu';
import MainSidebar from './components/Main Sidebar/MainSidebar';
import MainCenterBlock from './components/Main Center Block/MainCenterBlock';
import Bar from './components/Bar/Bar';
import Footer from './components/Footer/Footer';
import * as S from './App.Style';
import GlobalStyle from './App.CreateGlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <S.App>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <MainNavMenu />
              <MainCenterBlock />
              <MainSidebar />
            </S.Main>
            <Bar />
            <Footer />
          </S.Container>
        </S.Wrapper>
      </S.App>
    </>
  )
}

export default App;
