import { useContext } from 'react';
import { UserContext } from '../../../Usercontext/Usercontext';
import * as S from './Track-PlayLikeDis.style';
import {
  useAddFavoriteTrackIDMutation,
  useDeleteFavoriteTrackIDMutation,
} from '../../../redux/music/serviceQuery';
import { useSelector } from 'react-redux';
import {
  selectAllTracks,
  selectAllTracksFavorites,
  selectCollectionId,
  selectTrackInfo
} from '../../../redux/music/musicSlice';


function TrackPlayLikeDis() {

  const { userData } = useContext(UserContext)
  const [addFavoriteTrackID] = useAddFavoriteTrackIDMutation()
  const [deleteFavoriteTrackID] = useDeleteFavoriteTrackIDMutation()
  const trackInfo = useSelector(selectTrackInfo)
  const allTracks = useSelector(selectAllTracks);
  const favoritesTracks = useSelector(selectAllTracksFavorites)
  const collectionId = useSelector(selectCollectionId)

  const toggleLikedTrack = () => {
    if (allTracks || collectionId ||
      !trackInfo?.stared_user?.find((user) => user.id === userData.id)) {
      addFavoriteTrackID(trackInfo.id)
    }
  }

  const toggleDislikedTrack = () => {
    if (allTracks || collectionId || favoritesTracks ||
      trackInfo?.stared_user?.find((user) => user.id === userData.id)) {
      deleteFavoriteTrackID(trackInfo.id)
    }
  }

  return (
    <S.TrackPlayLikeSis>
      <S.TrackPlayLike>
        <S.TrackPlayLikeSvg alt="like" onClick={() => toggleLikedTrack()}>
          <use xlinkHref="/img/icon/sprite.svg#icon-like" />
        </S.TrackPlayLikeSvg>
      </S.TrackPlayLike >
      <S.TrackPlayDislike>
        <S.TrackPlayDislikeSvg alt="dislike" onClick={() => toggleDislikedTrack()}>
          <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
        </S.TrackPlayDislikeSvg>
      </S.TrackPlayDislike>
    </S.TrackPlayLikeSis >
  );
}

export default TrackPlayLikeDis;