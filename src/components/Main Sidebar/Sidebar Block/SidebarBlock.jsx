import { useEffect, useState } from "react";
import * as S from './SidebarBlock.style';

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
        <S.SkeletonSidebarItem />
      ) : (
        <S.SidebarItem>
          <S.SidebarLink href="./">
            <S.SidebarImg
              src="img/playlist01.png"
              alt="day's playlist"
            />
          </S.SidebarLink>
        </S.SidebarItem>
      )}
      {loading ? (
        <S.SkeletonSidebarItem />
      ) : (
        <S.SidebarItem >
          <S.SidebarLink href="./">
            <S.SidebarImg
              src="img/playlist02.png"
              alt="day's playlist"
            />
          </S.SidebarLink>
        </S.SidebarItem>
      )}
      {loading ? (
        <S.SkeletonSidebarItem />
      ) : (
        <S.SidebarItem>
          <S.SidebarLink href="./">
            <S.SidebarImg
              src="img/playlist03.png"
              alt="day's playlist"
            />
          </S.SidebarLink>
        </S.SidebarItem>
      )}
    </>
  );
}

export default SidebarBlock;