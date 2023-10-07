import { useEffect, useState } from "react";
import ArrayMusic from '../../Array/ArrayMusic';
import './CenterBlockContent.css';

function CenterBlockContent() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  })

  return (

    <div className="centerblock__content">
      <div className="content__title playlist-title" >
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        {ArrayMusic.map((music) => (
          <div className="playlist__item" key={music.id}>
            <div className="playlist__track track">
              <div className="track__title">
                {loading ? (
                  <div className="skeleton__title-image" />
                ) : (
                  <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                )
                }
                {loading ? (
                  <div className="skeleton__title-text" />
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      {music.trackName}
                      <span className="track__title-span">{music.addition}</span>
                    </a>
                  </div>
                )}
              </div>
              {loading ? (
                <div className="skeleton__author" />
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    {music.trackAuthor}
                  </a>
                </div>
              )}
              {loading ? (
                <div className="skeleton__album" />
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    {music.album}
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </svg>
                {loading ? (
                  <div className="track__time-text">0:00</div>
                ) : (
                  <span className="track__time-text">{music.time}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CenterBlockContent;