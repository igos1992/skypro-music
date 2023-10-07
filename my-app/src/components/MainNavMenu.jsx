import NavBurger from './Main Nav Menu under components/NavBurger';
import NavLogo from './Main Nav Menu under components/NavLogo';

function MainNavMenu() {
  return (
    <nav className="main__nav nav">
      <NavLogo />
      <NavBurger />
    </nav>
  )
}

export default MainNavMenu;
