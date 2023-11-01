import PlayerControls from './Player Controls/PlayerControls';
import TrackPlayLikeDis from './Track-Play Like-Dis/Track-PlayLikeDis';
import BarVolumeBlock from './Bar Volume-Block/BarVolumeBlock';
import * as S from './Bar.style';
import { useEffect, useRef, useState } from 'react';

function Bar({ currentMusic }) {

  function convertTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }

    return `${min}:${sec}`;
  }

  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [trackTime, setTrackTime] = useState(0);
  const [volumeChange, setVolumeChange] = useState(0)

  const audioRef = useRef(null);
  const audio = document.querySelector("audio");

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    handleStart();

    if (!audio) {

      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
      });
      audioRef.current.addEventListener("loadedmetadata", () => {
        setTrackTime(audioRef.current.duration);

      });

      return () => {
        audioRef.current.removeEventListener("timeupdate", () => {
          setCurrentTime(audioRef.current.currentTime);
        });
        audioRef.current.removeEventListener("loadedmetadata", () => {
          setTrackTime(audioRef.current.duration);
        });
      };
    }

  }, [currentMusic.track_file]);

  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <>
      <S.Audio
        controls
        loop={isLoop}
        ref={audioRef}
        src={currentMusic.track_file}
      >
      </S.Audio>
      <S.Bar>
        <S.MusicTimeProgress>
          {convertTime(currentTime)}
          /
          {convertTime(trackTime)}
        </S.MusicTimeProgress>
        <S.BarContent>
          <S.StyledProgressInput
            type="range"
            min={0}
            max={trackTime}
            value={currentTime}
            step={0.01}
            onChange={(event) => {
              audioRef.current.currentTime = event.target.value;
              setCurrentTime(event.target.value)
            }}
            $color="#b672ff"
          />

          <S.BarPlayerBlock>
            <S.BarPlayer>
              <PlayerControls
                handleStart={handleStart}
                handleStop={handleStop}
                isPlaying={isPlaying}
                isLoop={isLoop}
                setIsLoop={setIsLoop}
              />
              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor onClick={togglePlay}>
                    <S.TrackPlayAuthorLink >
                      {currentMusic.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum >
                    <S.TrackPlayAlbumLink >
                      {currentMusic.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>
                <TrackPlayLikeDis />
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <BarVolumeBlock
              setVolumeChange={setVolumeChange}
              volumeChange={volumeChange}
              audioRef={audioRef}
            />
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}

export default Bar;