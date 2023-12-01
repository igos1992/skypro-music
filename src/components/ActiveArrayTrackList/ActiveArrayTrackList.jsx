import { useContext } from 'react';
import {
  useSelector
} from 'react-redux';
import { UserContext } from '../../Usercontext/Usercontext';

import {
  useAddFavoriteTrackIDMutation,
  useDeleteFavoriteTrackIDMutation,
} from '../../redux/music/serviceQuery';
import {
  selectCurrentTrack,
  // selectDeterminingTheActiveFilter,
  selectFilterAuthors,
  selectFilterGenres,
  selectFilterSort,
  selectPulsatingPoint,
  selectSearchByTrackTitle,
  setSortTrackFilter,

} from '../../redux/music/musicSlice';
import * as S from './ActiveArrayTrackList.style';
import { ItemTrack } from './ItemTrack/ItemTrack';


export function ActiveArrayTrackList({ data }) {


  const searchByTrackTitleText = useSelector(selectSearchByTrackTitle)
  // const filterGenreAll = useSelector(selectFilterGenres)
  // const filterAuthor = useSelector(selectFilterAuthors)
  // const determiningTheActiveFilter = useSelector(selectDeterminingTheActiveFilter)
  // console.log(determiningTheActiveFilter);

  // const searchLetter = (data).filter((music) => {
  //   if (searchByTrackTitleText) {
  //      const matchesTitle = music.name.toLowerCase().includes(searchByTrackTitleText.toLowerCase())
  //   // console.log(music);
  //   // console.log({ name: music.name, matchesTitle });
  //   return matchesTitle
  //   }
  //   if (determiningTheActiveFilter === "genre") {
  //     const sortFilterGenre = music.genre.includes(filterGenreAll)
  //     // console.log({ name: music.genre, sortFilterGenre });

  //     return sortFilterGenre
  //   }
  //   if (determiningTheActiveFilter === "author") {
  //     const sortFilterAuthor = music.author.includes(filterAuthor)
  //     // console.log({ name: music.author, sortFilterAuthor });
  //     return sortFilterAuthor
  //   }
  //   return data
  // })

  const authorTrackFilter = useSelector(selectFilterAuthors)
  const genreTrackFilter = useSelector(selectFilterGenres)


  const searchLetter = (data).filter((music) => {
    const matchesTitle = music.name.toLowerCase().includes(searchByTrackTitleText.toLowerCase())
    // console.log(music);
    // console.log({ name: music.name, matchesTitle });
    const sortFilterAuthor = !authorTrackFilter.length
      ? music
      : music.author.includes(
        authorTrackFilter.find((author) => author === music.author)
      )
    // console.log({ name: music.genre, sortFilterGenre });
    const sortFilterGenre = !genreTrackFilter.length
      ? music
      : music.genre.includes(
        genreTrackFilter.find((genre) => genre === music.genre)
      )
    // console.log({ name: music.author, sortFilterAuthor });
    return matchesTitle && sortFilterGenre && sortFilterAuthor
  });

  const sortTrackFilter = useSelector(selectFilterSort)
  console.log(sortTrackFilter);

  const filteredAndSortTracks = () => {
    if (sortTrackFilter === "Сначала новые") {
      return searchLetter
        .sort((a, b) => parseFloat(a.release_date) - parseFloat(b.release_date))
        .reverse()
    }
    if (sortTrackFilter === "Сначала старые") {
      return searchLetter
        .sort((a, b) => parseFloat(a.release_date) - parseFloat(b.release_date))
        .reverse()
    }
    if (sortTrackFilter === "По умолчанию" || !setSortTrackFilter) {
      return searchLetter
    }
  }



  const { userData } = useContext(UserContext)
  const CurrentTrack = useSelector(selectCurrentTrack);
  const pulsatingPoint = useSelector(selectPulsatingPoint);
  const [addFavoriteTrackID] = useAddFavoriteTrackIDMutation()
  const [deleteFavoriteTrackID] = useDeleteFavoriteTrackIDMutation()

  const toggleLikedTrack = ({ music }) => {
    if (location.pathname === "/FavoritesPage" || music?.stared_user?.find((user) => user.id === userData.id)) {
      deleteFavoriteTrackID(music.id)
    } else if (
      location.pathname === `/ProfileCollectionPages/1` ||
      location.pathname === `/ProfileCollectionPages/2` ||
      location.pathname === `/ProfileCollectionPages/3` ||
      location.pathname === "/" ||
      music?.stared_user?.find((user) => user.id === userData.id)) {
      addFavoriteTrackID(music.id)
    }
  }

  function convertTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
      sec = `0${sec}`
    }
    return `${min}:${sec}`;
  }

  return (
    <>
      {
        filteredAndSortTracks()?.map((music) => (
          <S.PlayListItem key={music.id} >
            <S.PlayListTrack>
              <S.TrackTitle>

                <S.TrackTitleImage >
                  {CurrentTrack && CurrentTrack.id === music.id ? (
                    <S.PointPlaying $playing={pulsatingPoint} />
                  ) : (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                    </S.TrackTitleSvg>
                  )
                  }
                </S.TrackTitleImage>

                <ItemTrack
                  music={music}
                  data={data}
                />

              </S.TrackTitle>

              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">
                  {music.author}
                </S.TrackAuthorLink>
              </S.TrackAuthor>

              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">
                  {music.album}
                </S.TrackAlbumLink>
              </S.TrackAlbum>

              <S.TrackTime >
                <S.TrackTimeSvg alt="time" onClick={() => toggleLikedTrack({ music })}>
                  {location.pathname === "/FavoritesPage" ||
                    music?.stared_user?.find((user) => user.id === userData.id) ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-like-active" />
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  )
                  }

                </S.TrackTimeSvg>
                <S.TrackTimeTextSpan>{convertTime(music.duration_in_seconds)}</S.TrackTimeTextSpan>

              </S.TrackTime>
            </S.PlayListTrack>
          </S.PlayListItem>
        ))
      }
    </>





  )
}