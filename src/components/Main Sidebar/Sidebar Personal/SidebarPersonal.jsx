import { useContext } from 'react';
import { UserContext, useUserLoginLogout } from '../../../Usercontext/Usercontext';
import * as S from './SidebarPersonal.style';

function SidebarPersonal() {

  const { changingUserInformation } = useUserLoginLogout();
  const { userData } = useContext(UserContext);
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>
        {userData.username}
      </S.SidebarPersonalName>
      <S.SidebarIcon
        onClick={changingUserInformation} >
        <svg alt="logout">
          <use xlinkHref="../img/icon/sprite.svg#logout" />
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}

export default SidebarPersonal;