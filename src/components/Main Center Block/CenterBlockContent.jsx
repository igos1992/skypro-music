import { useSelector } from 'react-redux';
import { useGetAllMusicQuery } from '../../redux/music/serviceQuery';
import { setSortTrackFilter } from '../../redux/music/musicSlice';
import {
  selectFilterAuthors,
  selectFilterGenres,
  selectFilterSort,
  selectSearchByTrackTitle
} from '../../redux/selectedFile/selectedFile'
import { ContentTitle } from './ContentTitle/ContentTitle';
import { ActiveArrayTrackList } from '../ActiveArrayTrackList/ActiveArrayTrackList';
import Skeleton from '../Array/skeleton';
import * as S from './CenterBlockContent.style';

function CenterBlockContent() {

  const { data, isError, error, isLoading } = useGetAllMusicQuery()
  const searchByTrackTitleText = useSelector(selectSearchByTrackTitle)
  const authorTrackFilter = useSelector(selectFilterAuthors)
  const genreTrackFilter = useSelector(selectFilterGenres)
  const sortTrackFilter = useSelector(selectFilterSort)

  const searchLetter = data?.filter((music) => {
    const matchesTitle = music.name.toLowerCase().includes(searchByTrackTitleText.toLowerCase())
    const sortFilterAuthor = !authorTrackFilter.length
      ? music
      : music.author.includes(
        authorTrackFilter.find((author) => author === music.author)
      )
    const sortFilterGenre = !genreTrackFilter.length
      ? music
      : music.genre.includes(
        genreTrackFilter.find((genre) => genre === music.genre)
      )
    return matchesTitle && sortFilterGenre && sortFilterAuthor
  });

  const filteredAndSortTracks = () => {
    if (sortTrackFilter.sort === "Сначала новые") {
      return searchLetter
        .sort((a, b) => parseFloat(a.release_date) - parseFloat(b.release_date))
        .reverse()
    }
    if (sortTrackFilter.sort === "Сначала старые") {
      return searchLetter
        .sort((a, b) => parseFloat(a.release_date) - parseFloat(b.release_date))
    }
    if (sortTrackFilter.sort === "По умолчанию" || !setSortTrackFilter.sort) {
      return searchLetter
    }
  }

  return (
    <S.CenterBlockContent>
      <ContentTitle />
      <S.ContentPlaylist>
        {isLoading ?
          <Skeleton />
          :
          <>
            {isError && <S.SpanErrorBlock>Не удалось загрузить плейлист, попробуйте позже: {error?.error}</S.SpanErrorBlock>}
            {
              filteredAndSortTracks()?.map((music) => (
                <ActiveArrayTrackList
                  key={music.id}
                  data={data}
                  isError={isError}
                  error={error}
                  isLoading={isLoading}
                  music={music}
                />
              ))
            }
          </>
        }
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default CenterBlockContent;