import { useUserLoginLogout } from '../../../Usercontext/Usercontext';
import * as S from './NavMenu.style';



function NavMenu() {

  const { changingUserInformation } = useUserLoginLogout();
  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink to="/">
            Главное
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/FavoritesPage">
            Мой плейлист
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink onClick={changingUserInformation} to="/login">
            Выйти
          </S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
}

export default NavMenu;