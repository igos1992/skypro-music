import NavBurger from './Nav Burger/NavBurger';
import NavLogo from './Nav Logo/NavLogo';
import './MainNavMenu.css';

function MainNavMenu() {
  return (
    <nav className="main__nav nav">
      <NavLogo />
      <NavBurger />
    </nav>
  )
}

export default MainNavMenu;
