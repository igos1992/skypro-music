import { useState, useEffect } from 'react';
import * as S from './CenterBlockFilter.style';
import { getTodosMusicAll } from '../../../api';

function CenterBlockFilter() {

  const [arrayMusicAll, setArrayMusicAll] = useState([])

  useEffect(() => {
    getTodosMusicAll().then((arrayMusicAll) => {
      console.log(arrayMusicAll);
      setArrayMusicAll(arrayMusicAll)
    })
  }, [])

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
              {arrayMusicAll.length}
            </S.FilterLength>
            <S.FilterMenu>
              <S.FilterList>
                {arrayMusicAll.map((item) => (
                  <li key={item.id}>
                    <S.TextDecoration href='#'>{item.name}</S.TextDecoration>
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
              {arrayMusicAll.length}
            </S.FilterLength>
            <S.FilterMenuYear>
              <S.FilterList>
                {arrayMusicAll.map((item) => (
                  <li key={item.id} >
                    <S.TextDecoration href='#'>{item.release_date}</S.TextDecoration>
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
              {arrayMusicAll.length}
            </S.FilterLength>
            <S.FilterMenu>
              <S.FilterList>
                {arrayMusicAll.map((item) => (
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