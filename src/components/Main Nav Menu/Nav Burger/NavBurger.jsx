import NavMenu from "../Nav Menu/NavMenu";
import { useState } from "react";
import * as S from './NavBurger.style';

function NavBurger() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && <NavMenu />}
    </>
  );
}

export default NavBurger;