import { Outlet } from "react-router-dom"
import { selectCurrentTrack } from '../../redux/music/playerBarSlice';
import { useSelector } from 'react-redux';
import GlobalStyle from "../../App.CreateGlobalStyle";
import MainNavMenu from "../../components/Main Nav Menu/MainNavMenu";
import Footer from "../../components/Footer/Footer";
import Bar from '../../components/Bar/Bar';
import CenterBlockSearch from '../Main Center Block/Center Block Search/CenterBlockSearch';
import MainSidebar from '../../components/Main Sidebar/MainSidebar';
import * as S from './MainLayout.style';


const MainLayout = () => {

  const CurrentTrack = useSelector(selectCurrentTrack)
  return <>
    <GlobalStyle />
    <S.App>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNavMenu />
            <S.MainCenterblock>
              <CenterBlockSearch />
              <Outlet />
            </S.MainCenterblock>
            <MainSidebar />
          </S.Main>
          
          {CurrentTrack && (<Bar />)}
          <Footer />
        </S.Container>
      </S.Wrapper>
    </S.App>
  </>

}

export default MainLayout