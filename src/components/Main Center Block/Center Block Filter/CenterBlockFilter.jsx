import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllMusicQuery } from '../../../redux/music/serviceQuery';
import {
  selectActiveLinkOnFilters,
  selectFilterAuthors,
  selectFilterGenres,
  selectFilterSort,
  setDeleteFilterAuthors,
  setDeleteFilterGenres,
  setFilterAuthors,
  setFilterGenres,
  setFilterSort,
} from '../../../redux/music/musicSlice';
import * as S from './CenterBlockFilter.style';

function CenterBlockFilter() {

  const { data } = useGetAllMusicQuery()
  const dispatch = useDispatch()
  const [activeFilter, setActiveFilter] = useState();
  const [genreArray, setGenreArray] = useState([])
  const [authorArray, setAuthorArray] = useState([])
  const [releaseArray, setReleaseArray] = useState([])
  const authorTrackFilter = useSelector(selectFilterAuthors)
  const genreTrackFilter = useSelector(selectFilterGenres)
  const sortTrackFilter = useSelector(selectFilterSort)
  const activeLinkOnFilters = useSelector(selectActiveLinkOnFilters)

  const handleAuthorTrackFilter = (authorTrack) => {
    if (authorTrackFilter.includes(authorTrack)) {
      dispatch(setDeleteFilterAuthors(authorTrack))
    } else {
      dispatch(setFilterAuthors(authorTrack))
    }
  }

  const handleGenreTrackFilter = (authorTrack) => {
    if (genreTrackFilter.includes(authorTrack)) {
      dispatch(setDeleteFilterGenres(authorTrack))
    } else {
      dispatch(setFilterGenres(authorTrack))
    }
  }

  const toggleVisibleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter)
  };

  useEffect(() => {
    if (data?.length > 0) {
      let newArr = []
      let arr = data.map(elem => elem.genre)
      for (let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])) continue
        newArr.push(arr[i])
      }
      setGenreArray(newArr)
      setAuthorArray(data.map(elem => elem.author))
      setReleaseArray(
        ["По умолчанию", "Сначала новые", "Сначала старые"]
          .map(elem => elem))
    }
  }, [data, activeFilter])

  return (
    <S.CenterBlockFilter>
      <S.FilterNameGenre>
        <S.FilterTitle >Искать по:</S.FilterTitle>
        <S.FilterWrap>
          <S.FilterButton
            onClick={() => toggleVisibleFilter("author")}
          >
            исполнителю
          </S.FilterButton>
          {activeFilter === "author" &&
            <>
              {authorTrackFilter.length ? (
                <S.FilterLength>{authorTrackFilter.length}</S.FilterLength>
              ) : (
                ''
              )}
              <S.FilterMenu>
                <S.FilterList>
                  {authorArray.map((author, index) => (
                    <li key={`item-${index}`}>
                      <S.TextDecoration href='#'
                        $isSelected={
                          authorTrackFilter.includes(author) ?
                            !activeLinkOnFilters :
                            activeLinkOnFilters
                        }
                        onClick={() => handleAuthorTrackFilter(author)}
                      >{author}</S.TextDecoration>
                    </li>
                  ))}
                </S.FilterList >
              </S.FilterMenu>
            </>}
        </S.FilterWrap>
        <S.FilterWrap>
          <S.FilterButton onClick={() => toggleVisibleFilter("genre")}>
            жанру
          </S.FilterButton>
          {activeFilter === "genre" &&
            <>
              {genreTrackFilter.length ? (
                <S.FilterLength>
                  {genreTrackFilter.length}
                </S.FilterLength>
              ) : (
                ''
              )}
              <S.FilterMenuGenre>
                <S.FilterList>
                  {genreArray.map((genre) => (
                    <li key={genre}>
                      <S.TextDecoration href='#'
                        $isSelected={
                          genreTrackFilter.includes(genre) ?
                            !activeLinkOnFilters :
                            activeLinkOnFilters
                        }
                        onClick={() => handleGenreTrackFilter(genre)}
                      >{genre}</S.TextDecoration>
                    </li>
                  ))}
                </S.FilterList>
              </S.FilterMenuGenre>
            </>}
        </S.FilterWrap>
      </S.FilterNameGenre>
      <S.FilterByDate>
        <S.FilterTitle>Сортировка:</S.FilterTitle>
        <S.FilterWrap>
          <S.FilterButton onClick={() => toggleVisibleFilter("sorting")}>
            По умолчанию
          </S.FilterButton>
          {activeFilter === "sorting" &&
            <>
              {sortTrackFilter.sort !== '' &&
                sortTrackFilter.sort !== 'По умолчанию' ? (
                <S.FilterLength>
                  1
                </S.FilterLength>
              ) : (
                ''
              )}
              <S.FilterMenuYear>
                <S.FilterList>
                  {releaseArray.map((release) => (
                    <li key={release}>
                      <S.TextDecoration href='#'
                        $isSelected={
                          sortTrackFilter.sort.includes(release) ?
                            !activeLinkOnFilters :
                            activeLinkOnFilters
                        }
                        onClick={() => dispatch(setFilterSort(release))}>
                        {release}
                      </S.TextDecoration>
                    </li>
                  ))}
                </S.FilterList>
              </S.FilterMenuYear>
            </>}
        </S.FilterWrap>
      </S.FilterByDate>
    </S.CenterBlockFilter >
  )
}

export default CenterBlockFilter;