import { useParams } from "react-router-dom";

import * as S from './ProfileCollectionPages.style';
import {
  useGetSelectionsQuery
} from "../../../redux/music/serviceQuery";
import { ContentTitle } from "../../../components/Main Center Block/ContentTitle/ContentTitle";
import { ActiveArrayTrackList } from "../../../components/ActiveArrayTrackList/ActiveArrayTrackList";
import Skeleton from "../../../components/Array/skeleton";


export const ProfileCollectionPages = () => {

  const params = useParams();

  const { data, isError, error, isLoading } = useGetSelectionsQuery(Number(params.id))

  return (
    <>
      <S.CenterblockH2>{data?.name}</S.CenterblockH2>
      <ContentTitle />
      <S.ContentPlaylist>
        {isLoading ?
          <Skeleton />
          :
          <>
            {isError && <S.SpanErrorBlock>Не удалось загрузить плейлист, попробуйте позже: {error?.error}</S.SpanErrorBlock>}
            <ActiveArrayTrackList
              data={data?.items}
            />
          </>
        }

      </S.ContentPlaylist>
    </>
  );
}