import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { UserContext } from '../../Usercontext/Usercontext';
import {
  useAddFavoriteTrackIDMutation,
  useDeleteFavoriteTrackIDMutation,
} from '../../redux/music/serviceQuery';
import {
  selectCurrentTrack,
  selectPulsatingPoint,
} from '../../redux/selectedFile/selectedFile';
import { ItemTrack } from './ItemTrack/ItemTrack';
import * as S from './ActiveArrayTrackList.style';


export function ActiveArrayTrackList({ data, music }) {

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
            )}
          </S.TrackTimeSvg>
          <S.TrackTimeTextSpan>{convertTime(music.duration_in_seconds)}</S.TrackTimeTextSpan>
        </S.TrackTime>
      </S.PlayListTrack>
    </S.PlayListItem>
  )
}