import SidebarPersonal from './Sidebar Personal/SidebarPersonal';
import SidebarBlock from './Sidebar Block/SidebarBlock';
import './MainSidebar.css';

function MainSidebar() {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPersonal />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarBlock />
        </div>
      </div>
    </div>
  );
}

export default MainSidebar;