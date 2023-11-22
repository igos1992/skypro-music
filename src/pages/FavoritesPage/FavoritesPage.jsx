import { useDispatch, useSelector } from 'react-redux';
import { useGetFavoriteTracksAllQuery, useGetTokenRefreshMutation } from '../../redux/music/usersTokenSlice';
import {
  // selectAllTracks, 
  selectCurrentTrack, selectPulsatingPoint, setCurrentTrack
} from '../../redux/music/playerBarSlice';
import * as S from './FavoritesPage.style';
import { useEffect } from 'react';

export const FavoritesPage = ({ addTodoError }) => {

  function convertTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
      sec = `0${sec}`
    }
    return `${min}:${sec}`;
  }

  const dispatch = useDispatch();
  const handleCurrentTrack = (music) => {
    dispatch(setCurrentTrack(music))
  }
  const CurrentTrack = useSelector(selectCurrentTrack);
  const pulsatingPoint = useSelector(selectPulsatingPoint);
  // const allTracks = useSelector(selectAllTracks);

  const { arrayFavorite = [], isError } = useGetFavoriteTracksAllQuery()
  // console.log(arrayFavorite);
  const [getTokenRefresh, { data }] = useGetTokenRefreshMutation()

  useEffect(() => {
    if (isError) {
      responseTokenRefresh()
    }
  }, [isError])

  const responseTokenRefresh = () => {
     getTokenRefresh()
      .unwrap()
      .then((token) => {
        console.log("token", token);
        sessionStorage.getItem('access', JSON.stringify(token?.refresh))
      })
  };
  // console.log(getTokenRefresh());
  console.log(data);
  console.log(sessionStorage.getItem('access'));
  console.log(sessionStorage.getItem('refresh'));

  // function addTrackLikedFavorite () {

  // }


  return (
    <S.ContentPlaylist>
      <S.SpanErrorBlock>{addTodoError}</S.SpanErrorBlock>
      <h1>Привет</h1>
      {arrayFavorite.map((music) => (
        <S.PlayListItem key={music.id}>
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
              <S.TrackAuthorLink href="#">
                {music.author}
              </S.TrackAuthorLink>
            </S.TrackAuthor>


            <S.TrackAlbum>
              <S.TrackAlbumLink href="#">
                {music.album}
              </S.TrackAlbumLink>
            </S.TrackAlbum>

            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>

              <S.TrackTimeTextSpan>{convertTime(music.duration_in_seconds)}</S.TrackTimeTextSpan>

            </S.TrackTime>
          </S.PlayListTrack>
        </S.PlayListItem>
      ))}

    </S.ContentPlaylist>
  );
}