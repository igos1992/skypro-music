import { useState } from 'react';
import ArrayMusic from '../../Array/ArrayMusic';

function CenterBlockFilter() {

  //  состояния для каждой кнопки (исполнитель, год выпуска, жанр) - всё выключено
  const [trackAuthorVisible, setTrackAuthorVisible] = useState(false)
  const [yearOfReleaseVisible, setYearOfReleaseVisible] = useState(false)
  const [visibleGenre, setVisibleGenre] = useState(false)

  // функция изменения состояния кнопки исполнителя при клике - исполнитель активный, год выпуска и жанр не активно
  const toggleVisibilityAuthor = () => {
    setTrackAuthorVisible(!trackAuthorVisible)
    setVisibleGenre(false)
    setYearOfReleaseVisible(false)
  }

  // функции изменения состояния кнопки года выпуска при клике - год выпуска активно, исполнитель и жанр не активно
  const toggleVisibilityGenre = () => {
    setTrackAuthorVisible(false)
    setVisibleGenre(!visibleGenre)
    setYearOfReleaseVisible(false)
  }

  // функции изменения состояния кнопки жанра при клике - жанр активен, год выпуска и исполнитель не активно
  const toggleVisibilityYear = () => {
    setTrackAuthorVisible(false)
    setVisibleGenre(false)
    setYearOfReleaseVisible(!yearOfReleaseVisible)
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      {/* перебираем массив с песнями и рендерим исполнителя */}
      {trackAuthorVisible ? (
        <div className="filter__wrap">
          <button className="filter__button button-author _btn-text_active" onClick={toggleVisibilityAuthor}>
            исполнителю
          </button>
          <div className="filter__length">
            {ArrayMusic.length}
          </div>
          <div className="filter__menu">
            <ul className="filter__list">
              {ArrayMusic.map((item) => (
                <li key={item.id}>
                  <a href='#'>{item.trackName}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <button className="filter__button button-author _btn-text" onClick={toggleVisibilityAuthor}>
          исполнителю
        </button>
      )}

      {/* перебираем массив с песнями и рендерим года выпуска */}  
      {yearOfReleaseVisible ? (
        <div className="filter__wrap">
          <button className="filter__button button-year _btn-text_active" onClick={toggleVisibilityYear}>
            году выпуска
          </button>
          <div className="filter__length">
            {ArrayMusic.length}
          </div>
          <div className="filter__menu filter__menu-year">
            <ul className="filter__list">
              {ArrayMusic.map((item) => (
                <li className='filter__list-item' key={item.id} >
                  <a href='#'>{item.yearOfRelease}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <button className="filter__button button-year _btn-text" onClick={toggleVisibilityYear}>
          году выпуска
        </button>
      )}

      {/* перебираем массив с песнями и рендерим жанра */}
      {visibleGenre ? (
        <div className="filter__wrap">
          <button className="filter__button button-genre _btn-text_active" onClick={toggleVisibilityGenre}>
            жанру
          </button>
          <div className="filter__length">
            {ArrayMusic.length}
          </div>
          <div className="filter__menu">
            <ul className="filter__list">
              {ArrayMusic.map((item) => (
                <li key={item.id}>
                  <a href='#'>{item.genre}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <button className="filter__button button-genre _btn-text" onClick={toggleVisibilityGenre}>
          жанру
        </button>
      )}

    </div>
  )
}

export default CenterBlockFilter;