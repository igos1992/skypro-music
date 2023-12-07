import { useDispatch } from "react-redux";
import {
  setAllTracks,
  setAllTracksFavorites,
  setCollectionId,
  setCurrentTrack,
  setTrackInfo
} from "../../../redux/music/musicSlice";
import * as S from './ItemTrack.style'

export function ItemTrack({ music, data }) {

  const dispatch = useDispatch();
  const handleCurrentTrack = (music) => {
    if (location.pathname === "/") {
      dispatch(setAllTracks(data));
      dispatch(setAllTracksFavorites());
      dispatch(setCollectionId())
    }
    if (location.pathname === "/FavoritesPage") {
      dispatch(setAllTracksFavorites(data));
      dispatch(setAllTracks());
      dispatch(setCollectionId())
    }
    if (
      location.pathname === `/ProfileCollectionPages/1` ||
      location.pathname === `/ProfileCollectionPages/2` ||
      location.pathname === `/ProfileCollectionPages/3`
    ) {
      dispatch(setCollectionId(data))
      dispatch(setAllTracks());
      dispatch(setAllTracksFavorites());
    }
    dispatch(setCurrentTrack(music))
    dispatch(setTrackInfo(music))
  }

  return (
    <S.TrackTitleText>
      <S.TrackTitleLink onClick={() => handleCurrentTrack(music)} >
        {music.name}
        <S.TrackTitleSpan>
          {music.addition}
        </S.TrackTitleSpan>
      </S.TrackTitleLink>
    </S.TrackTitleText>
  )
}