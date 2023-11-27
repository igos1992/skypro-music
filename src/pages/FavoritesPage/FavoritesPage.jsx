import { useGetFavoriteTracksAllQuery } from '../../redux/music/serviceQuery';
import { ContentTitle } from '../../components/Main Center Block/ContentTitle/ContentTitle';
import { ActiveArrayTrackList } from '../../components/ActiveArrayTrackList/ActiveArrayTrackList';
import Skeleton from '../../components/Array/skeleton';
import * as S from './FavoritesPage.style';

export const FavoritesPage = () => {

  const { data, isError, error, isLoading } = useGetFavoriteTracksAllQuery()

  return (
    <>
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
      <ContentTitle />
      <S.ContentPlaylist>
        {isLoading ?
          <Skeleton />
          :
          <>
            {isError
              &&
              <S.SpanErrorBlock>
                Не удалось загрузить плейлист, попробуйте позже: {error?.error}
              </S.SpanErrorBlock>}
            <>

              {data.length === 0 && location.pathname === "/FavoritesPage" ?
                <S.SpanNotTracksFavorite>В этом плейлисте пока нет Ваших любимых треков</S.SpanNotTracksFavorite>
                :

                <ActiveArrayTrackList
                  data={data}
                  isLoading={isLoading}
                />
              }
            </>
          </>
        }
      </S.ContentPlaylist>
    </>
  );
}