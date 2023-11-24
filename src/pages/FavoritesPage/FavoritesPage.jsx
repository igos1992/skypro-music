import { useDispatch, useSelector } from 'react-redux';
import {
  useGetFavoriteTracksAllQuery,
  //  useGetTokenRefreshMutation
} from '../../redux/music/usersTokenSlice';
import {
  // selectAllTracks, 
  selectCurrentTrack, selectPulsatingPoint, setCurrentTrack
} from '../../redux/music/playerBarSlice';
import * as S from './FavoritesPage.style';
// import { useEffect } from 'react';
import { ContentTitle } from '../../components/Main Center Block/ContentTitle/ContentTitle';

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

  const { data = [] } = useGetFavoriteTracksAllQuery()



  console.log(data);
  // const [getTokenRefresh, { data }] = useGetTokenRefreshMutation()

  // useEffect(() => {
  //   console.log(error);

  //   if (error) {
  //     console.log(error);
  //      responseTokenRefresh()
  //   }

  // }, [error])

  // const responseTokenRefresh = async () => {
  //   await getTokenRefresh()
  //     .then((token) => {
  //         console.log("token", token)
  //         localStorage.setItem('access', token?.access)      
  //     })
  // };

  // console.log(getTokenRefresh());
  // console.log(data);
  // console.log(localStorage.getItem('access'));
  // console.log(localStorage.getItem('refresh'));

  // function addTrackLikedFavorite () {

  // }


  return (
    <>
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
      <ContentTitle />
      <S.ContentPlaylist>
        <S.SpanErrorBlock>{addTodoError}</S.SpanErrorBlock>
        {
          data
            ?
            <>
              {
                data.map((music) => (
                  <S.PlayListItem key={music.id}>
                    <S.PlayListTrack>
                      <S.TrackTitle>

                        <S.TrackTitleImage >
                          {
                            CurrentTrack && CurrentTrack.id === music.id
                              ? (
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
                ))
              }
            </>

            :
            <S.CenterBlock> В этом плейлисте нет треков </S.CenterBlock>
        }
      </S.ContentPlaylist>
    </>
  );
}