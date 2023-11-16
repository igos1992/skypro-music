import MainNavMenu from '../../components/Main Nav Menu/MainNavMenu';
import MainSidebar from '../../components/Main Sidebar/MainSidebar';
import MainCenterBlock from '../../components/Main Center Block/MainCenterBlock';
import Bar from '../../components/Bar/Bar';
import Footer from '../../components/Footer/Footer';
import * as S from './MainPage.Style';
import GlobalStyle from '../../App.CreateGlobalStyle';
import { selectCurrentTrack } from '../../redux/music/playerBarSlice';
import { useSelector } from 'react-redux';

export function MainPage(
  {
    loading,
    arrayMusicAll,
    addTodoError,
    handleCurrentMusic,
  }
) {

  const CurrentTrack = useSelector(selectCurrentTrack)

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
              >
              </MainCenterBlock>
              <MainSidebar />
            </S.Main>
            {CurrentTrack && (<Bar />)}
            <Footer />
          </S.Container>
        </S.Wrapper>
      </S.App>
    </>
  );
}
