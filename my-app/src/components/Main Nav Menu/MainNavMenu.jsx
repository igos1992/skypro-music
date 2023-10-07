import NavBurger from './Nav Burger/NavBurger';
import NavLogo from './Nav Logo/NavLogo';

function MainNavMenu() {
  return (
    <nav className="main__nav nav">
      <NavLogo />
      <NavBurger />
    </nav>
  )
}

export default MainNavMenu;
