import { useParams } from "react-router-dom";

import * as S from './ProfileCollectionPages.style';
import {
  useGetSelectionsQuery
} from "../../../redux/music/serviceQuery";
import { ContentTitle } from "../../../components/Main Center Block/ContentTitle/ContentTitle";
import { ActiveArrayTrackList } from "../../../components/ActiveArrayTrackList/ActiveArrayTrackList";


export const ProfileCollectionPages = () => {

  const params = useParams();

  const { data } = useGetSelectionsQuery(Number(params.id))

  return (
    <>
      <S.CenterblockH2>{data?.name}</S.CenterblockH2>
      <ContentTitle />
      <S.ContentPlaylist>
        <ActiveArrayTrackList
          data={data?.items}
        />
      </S.ContentPlaylist>
    </>
  );
}