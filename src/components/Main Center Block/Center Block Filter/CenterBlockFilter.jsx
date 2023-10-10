import { useState } from 'react';
import ArrayMusic from '../../Array/ArrayMusic';
import './CenterBlockFilter.css';

function CenterBlockFilter() {

  const [activeFilter, setActiveFilter] = useState(null);
  const toggleVisibleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__wrap">
        <button className="filter__button _btn-text_active _btn-text" onClick={() => toggleVisibleFilter("author")}>
          исполнителю
        </button>
        {activeFilter === "author" &&
        <>
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
        </>}
      </div>

      <div className="filter__wrap">
        <button className="filter__button _btn-text_active _btn-text" onClick={() => toggleVisibleFilter("year")}>
          году выпуска
        </button>
        {activeFilter === "year" &&
        <>
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
        </>}
      </div>

      <div className="filter__wrap">
        <button className="filter__button _btn-text_active _btn-text" onClick={() => toggleVisibleFilter("genre")}>
          жанру
        </button>
        {activeFilter === "genre" &&
          <>
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
          </>}
      </div>
    </div>
  )
}

export default CenterBlockFilter;