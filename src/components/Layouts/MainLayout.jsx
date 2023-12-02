import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectCurrentTrack } from '../../redux/music/musicSlice';
import GlobalStyle from "../../App.CreateGlobalStyle";
import MainNavMenu from "../Main Nav Menu/MainNavMenu";
import Footer from "../Footer/Footer";
import Bar from '../Bar/Bar';
import CenterBlockSearch from '../Main Center Block/Center Block Search/CenterBlockSearch';
import MainSidebar from '../Main Sidebar/MainSidebar';
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