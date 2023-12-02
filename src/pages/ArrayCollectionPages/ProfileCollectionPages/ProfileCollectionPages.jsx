import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetSelectionsQuery } from "../../../redux/music/serviceQuery";
import { selectSearchByTrackTitle } from "../../../redux/music/musicSlice";
import { ContentTitle } from "../../../components/Main Center Block/ContentTitle/ContentTitle";
import { ActiveArrayTrackList } from "../../../components/ActiveArrayTrackList/ActiveArrayTrackList";
import Skeleton from "../../../components/Array/skeleton";
import * as S from './ProfileCollectionPages.style';

export const ProfileCollectionPages = () => {

  const params = useParams();
  const { data, isError, error, isLoading } = useGetSelectionsQuery(Number(params.id))
  const searchByTrackTitleText = useSelector(selectSearchByTrackTitle)
  const searchLetter = data?.items?.filter((music) => {
    const matchesTitle = music.name.toLowerCase().
      includes(searchByTrackTitleText.toLowerCase())
    return matchesTitle
  });

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
            {
              searchLetter?.map((music) => (
                <ActiveArrayTrackList
                  key={music.id}
                  data={data?.items}
                  music={music}
                />
              ))
            }
          </>
        }
      </S.ContentPlaylist>
    </>
  );
}