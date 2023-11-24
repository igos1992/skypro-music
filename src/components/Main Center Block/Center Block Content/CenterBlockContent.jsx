import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import * as S from './CenterBlockContent.style';
import { ContentTitle } from '../ContentTitle/ContentTitle';
import {
  setAllTracks,
  setCurrentTrack
} from '../../../redux/music/playerBarSlice';
import {
  selectCurrentTrack,
  // selectAllTracks, 
  selectPulsatingPoint
} from '../../../redux/music/playerBarSlice';
import {
  useAddFavoriteTrackIDMutation,
  useGetAllMusicQuery,
  useDeleteFavoriteTrackIDMutation,
} from '../../../redux/music/usersTokenSlice';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../Usercontext/Usercontext';



function CenterBlockContent(
  {
    loading,
    // addTodoError,
  }
) {
  const dispatch = useDispatch();
  const handleCurrentTrack = (music) => {
    dispatch(setCurrentTrack(music))
    console.log(music.id);
  }



  const { userData } = useContext(UserContext)


  console.log(userData);

  const CurrentTrack = useSelector(selectCurrentTrack);
  // const allTracks = useSelector(selectAllTracks);
  const pulsatingPoint = useSelector(selectPulsatingPoint);


  const { data = [] } = useGetAllMusicQuery()

  useEffect(() => {
    dispatch(setAllTracks(data))
  }, [data]);
  
  console.log(data);

  const [addFavoriteTrackID] = useAddFavoriteTrackIDMutation()
  const [deleteFavoriteTrackID] = useDeleteFavoriteTrackIDMutation()


  function addTrackFavorite(id) {
    addFavoriteTrackID(id)
  }
  function deleteTrackFavorite(id) {
    deleteFavoriteTrackID(id)
  }

  const toggleLikedTrack = ({ music }) => {
    console.log(music?.stared_user?.find((user) => user.id === userData.id));
    if (music?.stared_user?.find((user) => user.id === userData.id)) {
      deleteTrackFavorite(music.id)
    } else {
      addTrackFavorite(music.id)
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
    <S.CenterBlockContent>
      <ContentTitle />
      <S.ContentPlaylist>
        {/* <S.SpanErrorBlock>{addTodoError}</S.SpanErrorBlock> */}
        {data.map((music) => (
          <S.PlayListItem key={music.id}>
            <S.PlayListTrack>
              <S.TrackTitle>
                {loading ? (
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
                ) : (
                  <S.SkeletonTitleImage />
                )
                }
                {loading ? (
                  <S.TrackTitleText>
                    <S.TrackTitleLink onClick={() => handleCurrentTrack(music)} >
                      {music.name}
                      <S.TrackTitleSpan>{music.addition}</S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </S.TrackTitleText>
                ) : (
                  <S.SkeletonTitleText />
                )}
              </S.TrackTitle>
              {loading ? (
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">
                    {music.author}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
              ) : (
                <S.SkeletonAuthor />
              )}
              {loading ? (
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">
                    {music.album}
                  </S.TrackAlbumLink>
                </S.TrackAlbum>
              ) : (
                <S.SkeletonAlbum />
              )}
              <S.TrackTime >
                <S.TrackTimeSvg alt="time" onClick={() => toggleLikedTrack({ music })}>

                  {music?.stared_user?.find((user) => user.id === userData.id) ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-like-active" />
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />

                  )}

                </S.TrackTimeSvg>
                {loading ? (
                  <S.TrackTimeTextSpan>{convertTime(music.duration_in_seconds)}</S.TrackTimeTextSpan>
                ) : (
                  <S.TrackTimeText>0:00</S.TrackTimeText>
                )}
              </S.TrackTime>
            </S.PlayListTrack>
          </S.PlayListItem>
        ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default CenterBlockContent;