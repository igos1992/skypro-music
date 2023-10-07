import NavMenu from "../Nav Menu/NavMenu";
import { useState } from "react";

function NavBurger() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      {visible && <NavMenu />}
    </>
  );
}

export default NavBurger;