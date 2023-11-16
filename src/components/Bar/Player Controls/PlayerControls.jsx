import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as S from './PlayerControls.style';
import {
  selectShuffle,
  setToggleShuffleTrack,
  selectToggleShuffleTrack,
  setShuffle
} from '../../../redux/music/playerBarSlice';

function PlayerControls({
  isPlaying,
  handleNextTrack,
  handlePrevTrack,
  setIsLoop,
  handleStop,
  handleStart,
  isLoop
}) {

  const dispatch = useDispatch();
  const shuffle = useSelector(selectShuffle);
  const toggleShuffleTrack = useSelector(selectToggleShuffleTrack)

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev onClick={() => handlePrevTrack()}>
        <S.PlayerBtnPrevSvg alt="prev" >
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>

      <S.PlayerBtnPlay>
        <S.PlayerBtnPlaySvg
          alt="play"
          onClick={isPlaying ? handleStop : handleStart}>
          {isPlaying ? (
            <use xlinkHref="img/icon/sprite.svg#icon-pause" />
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          )}
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>

      <S.PlayerBtnNext onClick={() => handleNextTrack()}>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>

      <S.PlayerBtnRepeat>
        <S.PlayerBtnRepeatSvg
          alt="repeat"
          onClick={() => setIsLoop(!isLoop)}>
          {isLoop ? (
            <use xlinkHref="img/icon/sprite.svg#icon-repeatWhite" />
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
          )}
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>

      <S.PlayerBtnShuffle onClick={() => dispatch(setToggleShuffleTrack(toggleShuffleTrack))}>
        <S.PlayerBtnShuffleSvg alt="shuffle" onClick={() => { dispatch(setShuffle(!shuffle)) }}>
          {
            shuffle
              ? (
                <use
                  xlinkHref="img/icon/sprite.svg#icon-shuffleWhite"
                />
              ) : (
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
              )
          }

        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
}

export default PlayerControls;