import { useEffect, useState } from "react";
import './SidebarBlock.css';

function SidebarBlock() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  })

  return (
    <>
      {loading ? (
        <div className="skeleton__sidebar__item" />
      ) : (
        <div className="sidebar__item">
          <a className="sidebar__link" href="./">
            <img
              className="sidebar__img"
              src="img/playlist01.png"
              alt="day's playlist"
            />
          </a>
        </div>
      )}
      {loading ? (
        <div className="skeleton__sidebar__item" />
      ) : (
        <div className="sidebar__item">
          <a className="sidebar__link" href="./">
            <img
              className="sidebar__img"
              src="img/playlist02.png"
              alt="day's playlist"
            />
          </a>
        </div>
      )}
      {loading ? (
        <div className="skeleton__sidebar__item" />
      ) : (
        <div className="sidebar__item">
          <a className="sidebar__link" href="./">
            <img
              className="sidebar__img"
              src="img/playlist03.png"
              alt="day's playlist"
            />
          </a>
        </div>
      )}
    </>
  );
}

export default SidebarBlock;