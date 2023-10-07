import './Bar.css';
import PlayerControls from './Player Controls/PlayerControls';
import { useEffect, useState } from "react";
import TrackPlayLikeDis from './Track-Play Like-Dis/Track-PlayLikeDis';
import BarVolumeBlock from './Bar Volume-Block/BarVolumeBlock';

function Bar() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  })

  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <PlayerControls />
            <div className="player__track-play track-play">
              <div className="track-play__contain">
                {loading ? (
                  <div className="skeleton__track-play__image" />
                ) : (
                  <div className="track-play__image">
                    <svg className="track-play__svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                )}
                {loading ? (
                  <div className="skeleton__track-play__author" />
                ) : (
                  <div className="track-play__author">
                    <a className="track-play__author-link" href="http://">
                      Ты та...
                    </a>
                  </div>
                )}
                {loading ? (
                  <div className="skeleton__track-play__album" />
                ) : (
                  <div className="track-play__album">
                    <a className="track-play__album-link" href="http://">
                      Баста
                    </a>
                  </div>
                )}
              </div>
              <TrackPlayLikeDis />
            </div>
          </div>
          <BarVolumeBlock />
        </div>
      </div>
    </div>
  );
}

export default Bar;