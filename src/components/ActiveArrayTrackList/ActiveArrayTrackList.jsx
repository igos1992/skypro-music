import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../Usercontext/Usercontext';
import {
  useAddFavoriteTrackIDMutation,
  useDeleteFavoriteTrackIDMutation,
  useGetAllMusicQuery,
  useGetFavoriteTracksAllQuery,
  useGetSelectionsQuery,
} from '../../redux/music/serviceQuery';
import {
  selectCurrentTrack,
  selectPulsatingPoint,
  setAllTracks,
  setAllTracksFavorites,
  setCollectionId,
  setCurrentTrack,
} from '../../redux/music/musicSlice';
import * as S from './ActiveArrayTrackList.style';
import { useParams } from 'react-router-dom';

export function ActiveArrayTrackList({ data }) {

  const dispatch = useDispatch();
  const params = useParams();
  const { data: arrayAllTracks } = useGetAllMusicQuery()
  const { data: arrayFavoriteTracks } = useGetFavoriteTracksAllQuery()
  const { data: arrayCollectionPages } = useGetSelectionsQuery(Number(params.id))
  console.log(arrayCollectionPages?.items);

  const handleCurrentTrack = (music) => {
    if (location.pathname === "/") {
      // console.log(arrayAllTracks);
      dispatch(setAllTracks(arrayAllTracks));
      dispatch(setAllTracksFavorites());
      dispatch(setCollectionId())
    }
    if (location.pathname === "/FavoritesPage") {
      // console.log(arrayFavoriteTracks);
      dispatch(setAllTracksFavorites(arrayFavoriteTracks));
      dispatch(setAllTracks());
      dispatch(setCollectionId())
    }
    if (location.pathname === `/ProfileCollectionPages/${arrayCollectionPages?.id}`) {
      dispatch(setCollectionId(arrayCollectionPages?.items))
      dispatch(setAllTracks());
      dispatch(setAllTracksFavorites());
    }
    dispatch(setCurrentTrack(music))
  }

  const { userData } = useContext(UserContext)
  // console.log(userData);
  const CurrentTrack = useSelector(selectCurrentTrack);
  const pulsatingPoint = useSelector(selectPulsatingPoint);
  const [addFavoriteTrackID] = useAddFavoriteTrackIDMutation()
  const [deleteFavoriteTrackID] = useDeleteFavoriteTrackIDMutation()

  const toggleLikedTrack = ({ music }) => {
    // console.log(music?.stared_user?.find((user) => user.id === userData.id));
    if (location.pathname === "/FavoritesPage" || music?.stared_user?.find((user) => user.id === userData.id)) {
      deleteFavoriteTrackID(music.id)
    } else if (
      location.pathname === `/ProfileCollectionPages/${data?.id}`
      ||
      location.pathname === "/"
      ||
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
        <>
          {data && data.map((music) => (
            <S.PlayListItem key={music.id} >
              <S.PlayListTrack>
                <S.TrackTitle>

                  <S.TrackTitleImage >
                    {CurrentTrack && CurrentTrack.id === music.id ? (
                      <S.PointPlaying $playing={pulsatingPoint} />
                    ) : (
                      <S.TrackTitleSvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </S.TrackTitleSvg>
                    )
                    }
                  </S.TrackTitleImage>

                  <S.TrackTitleText>
                    <S.TrackTitleLink onClick={() => handleCurrentTrack(music)} >
                      {music.name}
                      <S.TrackTitleSpan>{music.addition}</S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </S.TrackTitleText>

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
          ))}
        </>
      }
    </>
  )
}