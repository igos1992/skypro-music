import {
  useEffect,
  useState
} from 'react';
import {
  useDispatch, useSelector
} from 'react-redux';
import { useGetAllMusicQuery } from '../../../redux/music/serviceQuery';
import * as S from './CenterBlockFilter.style';
import {
  selectFilterAuthors,
  selectFilterGenres,
  setDeleteFilterAuthors,
  setDeleteFilterGenres,
  // setDeterminingTheActiveFilter,
  setFilterAuthors,
  // selectFilterGenres, 
  // selectFilterSort, 
  setFilterGenres,
  setFilterSort,
  // setSortTrackFilter,
  // setSortTrackFilter
} from '../../../redux/music/musicSlice';



function CenterBlockFilter() {

  const { data } = useGetAllMusicQuery()


  const dispatch = useDispatch()
  const [activeFilter, setActiveFilter] = useState();
  const [genreArray, setGenreArray] = useState([])
  const [authorArray, setAuthorArray] = useState([])
  const [releaseArray, setReleaseArray] = useState([])


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
      setReleaseArray(["По умолчанию", "Сначала новые", "Сначала старые"].map(elem => elem))
    }

  }, [data, activeFilter])


  const authorTrackFilter = useSelector(selectFilterAuthors)
  const genreTrackFilter = useSelector(selectFilterGenres)
  // console.log(authorTrackFilter);
  // console.log(genreTrackFilter);

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


  console.log(authorArray);
  console.log(releaseArray);


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
              <S.FilterLength>
                {authorArray.length}
              </S.FilterLength>
              <S.FilterMenu>
                <S.FilterList>
                  {authorArray.map((author, index) => (
                    <li key={`item-${index}`}>
                      <S.TextDecoration href='#'
                        onClick={() => handleAuthorTrackFilter(author)}
                      >{author}</S.TextDecoration>
                    </li>
                  ))}
                </S.FilterList>
              </S.FilterMenu>
            </>}
        </S.FilterWrap>

        <S.FilterWrap>
          <S.FilterButton onClick={() => toggleVisibleFilter("genre")}>
            жанру
          </S.FilterButton>
          {activeFilter === "genre" &&
            <>
              <S.FilterLength>
                {genreArray.length}
              </S.FilterLength>
              <S.FilterMenu>
                <S.FilterList>
                  {genreArray.map((genre) => (
                    <li key={genre}>
                      <S.TextDecoration href='#'
                        onClick={() => handleGenreTrackFilter(genre)}
                      >{genre}</S.TextDecoration>
                    </li>
                  ))}
                </S.FilterList>
              </S.FilterMenu>
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
              <S.FilterLength >
                {releaseArray.length}
              </S.FilterLength>
              <S.FilterMenuYear>
                <S.FilterList>
                  {releaseArray.map((release) => (
                    <li key={release}>
                      <S.TextDecoration href='#'
                        onClick={() => dispatch(setFilterSort(release))}>
                        {release}
                      </S.TextDecoration>
                    </li>
                  ))}

                  {/* <S.TextDecoration href='#'
                    onClick={() =>
                      dispatch(setSortTrackFilter(
                        'По умолчанию'))}>
                    По умолчанию
                  </S.TextDecoration>
                  <S.TextDecoration href='#'
                    onClick={() =>
                      dispatch(setSortTrackFilter(
                        'Сначала новые'))}>
                    Сначала новые
                  </S.TextDecoration>
                  <S.TextDecoration href='#'
                    onClick={() =>
                      dispatch(setSortTrackFilter(
                        'Сначала старые'))}>
                    Сначала старые
                  </S.TextDecoration> */}

                  {/* {data.map((item) => (
                    <li key={item.id} >
                      <S.TextDecoration href='#'>{item.release_date}</S.TextDecoration>
                    </li>
                  ))} */}
                </S.FilterList>
              </S.FilterMenuYear>
            </>}
        </S.FilterWrap>
      </S.FilterByDate>

    </S.CenterBlockFilter>
  )
}

export default CenterBlockFilter;