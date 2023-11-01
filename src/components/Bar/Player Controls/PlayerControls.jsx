import { useState } from 'react';
import * as S from './PlayerControls.style';


function PlayerControls({ isPlaying, setIsLoop, handleStop, handleStart, isLoop }) {

  const [activeAlert, setActiveAlert] = useState(false);
  const alertOn = () => {
    setActiveAlert(alert("Ещё не реализовано"))
  }

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev onClick={alertOn}>
        <S.PlayerBtnPrevSvg alt="prev" >
          {activeAlert ? (
            alertOn()
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-prev" />
          )}
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

      <S.PlayerBtnNext onClick={alertOn}>
        <S.PlayerBtnNextSvg alt="next">
          {activeAlert ? (
            alertOn()
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-next" />
          )}
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

      <S.PlayerBtnShuffle onClick={alertOn}>
        <S.PlayerBtnShuffleSvg alt="shuffle">
          {activeAlert ? (
            alertOn()
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
          )}
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
}

export default PlayerControls;