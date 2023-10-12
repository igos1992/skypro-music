import NavBurger from './Nav Burger/NavBurger';
import NavLogo from './Nav Logo/NavLogo';
import * as S from './MainNavMenu.style';

function MainNavMenu() {
  return (
    <S.MainNav>
      <NavLogo />
      <NavBurger />
    </S.MainNav>
  )
}

export default MainNavMenu;
