import NavBurger from './Main Nav Menu under components/NavBurger';
import NavMenu from './Main Nav Menu under components/NavMenu';
import NavLogo from './Main Nav Menu under components/NavLogo';

function MainNavMenu() {
  return (
    <nav className="main__nav nav">
      <NavLogo />
      <NavBurger />
      <NavMenu />
    </nav>
  )
}

export default MainNavMenu;
