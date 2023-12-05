import { useSelector } from 'react-redux';
import { useGetFavoriteTracksAllQuery } from '../../redux/music/serviceQuery';
import { ContentTitle } from '../../components/Main Center Block/ContentTitle/ContentTitle';
import { ActiveArrayTrackList } from '../../components/ActiveArrayTrackList/ActiveArrayTrackList';
import Skeleton from '../../components/Array/skeleton';
import { selectSearchByTrackTitle } from '../../redux/selectedFile/selectedFile';

import * as S from './FavoritesPage.style';

export const FavoritesPage = () => {

  const { data, isError, error, isLoading } = useGetFavoriteTracksAllQuery()
  const searchByTrackTitleText = useSelector(selectSearchByTrackTitle)
  const searchLetter = data?.filter((music) => {
    const matchesTitle = music.name.toLowerCase().
      includes(searchByTrackTitleText.toLowerCase())
    return matchesTitle
  });

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
              {data?.length === 0 && location.pathname === "/FavoritesPage" ?
                <S.SpanNotTracksFavorite>В этом плейлисте пока нет Ваших любимых треков</S.SpanNotTracksFavorite>
                :
                searchLetter?.map((music) => (
                  <ActiveArrayTrackList
                    key={music.id}
                    data={data}
                    music={music}
                    isLoading={isLoading}
                  />
                ))
              }
            </>
          </>
        }
      </S.ContentPlaylist>
    </>
  );
}