import SidebarPersonal from './Main Sidebar under components/SidebarPersonal';
import SidebarBlock from './Main Sidebar under components/SidebarBlock';

function MainSidebar () {
  return (
    <div className="main__sidebar sidebar">
              <SidebarPersonal />
              <SidebarBlock />
            </div>
  );
}

export default MainSidebar;