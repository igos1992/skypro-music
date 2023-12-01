import { useEffect, useState } from "react";
import * as S from './SidebarBlock.style';

function SidebarBlock({ collections }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  })

  return (
    <>
        {collections.map((collection) => (
          <S.Item key={collection.id}>
          {
            loading?(
        <S.SkeletonSidebarItem />
      ) : (
        <S.SidebarItem>

          <S.SidebarLink to={`/ProfileCollectionPages/${collection.id}`} >
            <S.SidebarImg
              src={collection.img}
              alt="day's playlist"
            />
          </S.SidebarLink>

        </S.SidebarItem>
      )}
        </S.Item>
      ))}
    </>
  );
}

export default SidebarBlock;