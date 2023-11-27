import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {
  selectAllTracks,
  selectAllTracksFavorites,
  selectCollectionId,
  selectCurrentTrack,
  selectShuffle,
  selectToggleShuffleTrack,
  setAllTracks,
  setAllTracksFavorites,
  setCollectionId,
  setCurrentTrack,
  setPulsatingPoint,
  setToggleShuffleTrack,
} from '../../redux/music/musicSlice';
import PlayerControls from './Player Controls/PlayerControls';
import TrackPlayLikeDis from './Track-Play Like-Dis/Track-PlayLikeDis';
import BarVolumeBlock from './Bar Volume-Block/BarVolumeBlock';
import * as S from './Bar.style';

function Bar() {

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

  const CurrentTrack = useSelector(selectCurrentTrack)
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [trackTime, setTrackTime] = useState(0);
  const [volumeChange, setVolumeChange] = useState(0)
  const audioRef = useRef(null);
  const dispatch = useDispatch()
  const allTracks = useSelector(selectAllTracks);
  const favoritesTracks = useSelector(selectAllTracksFavorites)
  const collectionId = useSelector(selectCollectionId)
  const [activeArrayTrack, setActiveArrayTrack] = useState([])
  console.log(collectionId);

  useEffect(() => {
    if (location.pathname === "/") {
      // console.log(allTracks);
      dispatch(setAllTracks(allTracks))
      dispatch(setToggleShuffleTrack(allTracks))
      setActiveArrayTrack(allTracks);
    }
    if (location.pathname === "/FavoritesPage") {
      // console.log(favoritesTracks);
      dispatch(setAllTracksFavorites(favoritesTracks));
      console.log(dispatch(setAllTracksFavorites(favoritesTracks)));
      dispatch(setToggleShuffleTrack(favoritesTracks))
      console.log(dispatch(setToggleShuffleTrack(favoritesTracks)));
      setActiveArrayTrack(favoritesTracks)
      console.log(setActiveArrayTrack(favoritesTracks));
    }
    if (location.pathname === `/ProfileCollectionPages/${collectionId}`) {
      dispatch(setCollectionId(collectionId))
      console.log(dispatch(setCollectionId(collectionId)));
      dispatch(setToggleShuffleTrack(collectionId))
      console.log(dispatch(setToggleShuffleTrack(collectionId)));
      setActiveArrayTrack(collectionId);
    }
  }, [activeArrayTrack, favoritesTracks, allTracks])

  const toggleShuffleTrack = useSelector(selectToggleShuffleTrack) // Перемешанный массив
  const shuffle = useSelector(selectShuffle); // active / not active shuffle
  const playingTrack = activeArrayTrack.find((element) => element.track_file === CurrentTrack.track_file); // Играющая песня
  let indexOf = activeArrayTrack.indexOf(playingTrack); // Индекс играющей песни (обычный массив)
  let indexShuffle = toggleShuffleTrack.indexOf(playingTrack); // Индекс играющей песни (перемешанный массив)

  function nextTrack(arrayTracks) {
    if (indexOf < arrayTracks.length - 1) {
      return dispatch(setCurrentTrack(arrayTracks[++indexOf]))
    }
  }

  function prevTrack() {
    if (indexOf > 0) {
      return dispatch(setCurrentTrack(activeArrayTrack[indexOf - 1]))
    }
  }

  const handleNextTrack = () => {
    if (!shuffle) {
      nextTrack(activeArrayTrack)
    } else {
      dispatch(setCurrentTrack(toggleShuffleTrack[++indexShuffle]))
    }
  }

  const handlePrevTrack = () => {
    if (!shuffle) {
      prevTrack(activeArrayTrack)
    } else {
      dispatch(setCurrentTrack(toggleShuffleTrack[indexShuffle - 1]))
    }
  }

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
    dispatch(setPulsatingPoint(true))
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    dispatch(setPulsatingPoint(false))
  };

  useEffect(() => {
    handleStart();

    if (!currentTime) {
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(Math.floor(audioRef.current.currentTime));
      });
      audioRef.current.addEventListener("loadedmetadata", () => {
        setTrackTime(Math.floor(audioRef.current.duration));
      });
      return () => {
        audioRef.current.removeEventListener("timeupdate", () => {
          setCurrentTime(Math.floor(audioRef.current.currentTime));
        });
        audioRef.current.removeEventListener("loadedmetadata", () => {
          setTrackTime(Math.floor(audioRef.current.duration));
        });
      };
    }
  }, [CurrentTrack.track_file]);

  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <>
      <S.Audio
        controls
        loop={isLoop}
        ref={audioRef}
        src={CurrentTrack.track_file}
        onEnded={handleNextTrack}
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
                audioRef={audioRef}
                handleNextTrack={handleNextTrack}
                handlePrevTrack={handlePrevTrack}
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
                      {CurrentTrack.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum >
                    <S.TrackPlayAlbumLink >
                      {CurrentTrack.author}
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