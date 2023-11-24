import { useDispatch, useSelector } from 'react-redux';
import {
  useDeleteFavoriteTrackIDMutation,
  useGetFavoriteTracksAllQuery,
} from '../../redux/music/usersTokenSlice';
import {
  // selectAllTracks, 
  selectCurrentTrack, selectPulsatingPoint, 
  setAllTracks,
   setCurrentTrack
} from '../../redux/music/playerBarSlice';
import * as S from './FavoritesPage.style';
// import { useEffect } from 'react';
import { ContentTitle } from '../../components/Main Center Block/ContentTitle/ContentTitle';
import { UserContext } from '../../Usercontext/Usercontext';
import { useContext, useEffect } from 'react';

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
  useEffect(() => {
    dispatch(setAllTracks(data))
  }, [data]);
  console.log(data);

  const { staredUser } = useContext(UserContext)

  const [deleteFavoriteTrackID] = useDeleteFavoriteTrackIDMutation()

  function deleteTrackFavorite(id) {
    deleteFavoriteTrackID(id)
  }

  return (
    <>
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
      <ContentTitle />
      <S.ContentPlaylist>
        <S.SpanErrorBlock>{addTodoError}</S.SpanErrorBlock>
        {/* <S.CenterBlock> В этом плейлисте нет треков </S.CenterBlock> */}
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
                        <S.TrackTimeSvg alt="time" onClick={() => deleteTrackFavorite(music.id)}>

                          {music?.stared_user?.find((user) => user.id === staredUser.id) ? (
                            <use xlinkHref="/img/icon/sprite.svg#icon-like" />

                          ) : (

                            <use xlinkHref="/img/icon/sprite.svg#icon-like-active" />
                          )}

                        </S.TrackTimeSvg>

                        <S.TrackTimeTextSpan>{convertTime(music.duration_in_seconds)}</S.TrackTimeTextSpan>

                      </S.TrackTime>
                    </S.PlayListTrack>
                  </S.PlayListItem>
                ))
           
        }
      </S.ContentPlaylist>
    </>
  );
}