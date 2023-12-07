import { useNavigate } from 'react-router-dom';
import * as S from './NavLogo.style';

function NavLogo() {

  const navigate = useNavigate()

  return (
    <S.NavLogo onClick={() => navigate('/')}>
      <S.LogoImage src="../img/logo.png" alt="logo" />
    </S.NavLogo>
  );
}

export default NavLogo;