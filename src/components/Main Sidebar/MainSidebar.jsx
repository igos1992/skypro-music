import SidebarPersonal from './Sidebar Personal/SidebarPersonal';
import SidebarBlock from './Sidebar Block/SidebarBlock';
import * as S from './MainSidebar.style';
import { ArrayCollectionPages } from '../../pages/ArrayCollectionPages/ArrayCollectionPages';


function MainSidebar() {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <S.SidebarBlock>
        <S.SidebarList>
          <SidebarBlock collections={ArrayCollectionPages}/>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default MainSidebar;