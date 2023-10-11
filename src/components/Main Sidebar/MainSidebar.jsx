import SidebarPersonal from './Sidebar Personal/SidebarPersonal';
import SidebarBlock from './Sidebar Block/SidebarBlock';
import * as S from './MainSidebar.style';

function MainSidebar() {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <S.SidebarBlock>
        <S.SidebarList>
          <SidebarBlock />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default MainSidebar;