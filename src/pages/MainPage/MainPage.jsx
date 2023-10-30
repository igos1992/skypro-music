import MainNavMenu from '../../components/Main Nav Menu/MainNavMenu';
import MainSidebar from '../../components/Main Sidebar/MainSidebar';
import MainCenterBlock from '../../components/Main Center Block/MainCenterBlock';
import Bar from '../../components/Bar/Bar';
import Footer from '../../components/Footer/Footer';
import * as S from './MainPage.Style';
import GlobalStyle from '../../App.CreateGlobalStyle';

export function MainPage(
  {
    loading,
    arrayMusicAll,
    addTodoError,
    handleCurrentMusic,
    currentMusic,
    setCurrentMusic
  }
) {
  return (
    <>
      <GlobalStyle />
      <S.App>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <MainNavMenu />
              <MainCenterBlock
                loading={loading}
                arrayMusicAll={arrayMusicAll}
                addTodoError={addTodoError}
                handleCurrentMusic={handleCurrentMusic}
                setCurrentMusic={setCurrentMusic}
              >
              </MainCenterBlock>
              <MainSidebar />
            </S.Main>
            {currentMusic ? <Bar currentMusic={currentMusic} /> : null}

            <Footer />
          </S.Container>
        </S.Wrapper>
      </S.App>
    </>
  );
}
