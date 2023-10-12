import { useState } from 'react';
import ArrayMusic from '../../Array/ArrayMusic';
import * as S from './CenterBlockFilter.style';

function CenterBlockFilter() {

  const [activeFilter, setActiveFilter] = useState(null);
  const toggleVisibleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (

    <S.CenterBlockFilter>
      <S.FilterTitle >Искать по:</S.FilterTitle>
      <S.FilterWrap>
        <S.FilterButton onClick={() => toggleVisibleFilter("author")}>
          исполнителю
        </S.FilterButton>
        {activeFilter === "author" &&
          <>
            <S.FilterLength>
              {ArrayMusic.length}
            </S.FilterLength>
            <S.FilterMenu>
              <S.FilterList>
                {ArrayMusic.map((item) => (
                  <li key={item.id}>
                    <S.TextDecoration href='#'>{item.trackName}</S.TextDecoration>
                  </li>
                ))}
              </S.FilterList>
            </S.FilterMenu>
          </>}
      </S.FilterWrap>

      <S.FilterWrap>
        <S.FilterButton onClick={() => toggleVisibleFilter("year")}>
          году выпуска
        </S.FilterButton>
        {activeFilter === "year" &&
          <>
            <S.FilterLength >
              {ArrayMusic.length}
            </S.FilterLength>
            <S.FilterMenuYear>
              <S.FilterList>
                {ArrayMusic.map((item) => (
                  <li key={item.id} >
                    <S.TextDecoration href='#'>{item.yearOfRelease}</S.TextDecoration>
                  </li>
                ))}
              </S.FilterList>
            </S.FilterMenuYear>
          </>}
      </S.FilterWrap>

      <S.FilterWrap>
        <S.FilterButton onClick={() => toggleVisibleFilter("genre")}>
          жанру
        </S.FilterButton>
        {activeFilter === "genre" &&
          <>
            <S.FilterLength>
              {ArrayMusic.length}
            </S.FilterLength>
            <S.FilterMenu>
              <S.FilterList>
                {ArrayMusic.map((item) => (
                  <li key={item.id}>
                    <S.TextDecoration href='#'>{item.genre}</S.TextDecoration>
                  </li>
                ))}
              </S.FilterList>
            </S.FilterMenu>
          </>}
      </S.FilterWrap>
    </S.CenterBlockFilter>
  )
}

export default CenterBlockFilter;