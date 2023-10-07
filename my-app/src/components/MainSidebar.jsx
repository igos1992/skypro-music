import SidebarPersonal from './Main Sidebar under components/SidebarPersonal';
import SidebarBlock from './Main Sidebar under components/SidebarBlock';

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