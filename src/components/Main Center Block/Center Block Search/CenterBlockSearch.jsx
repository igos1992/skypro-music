import { useDispatch, useSelector } from 'react-redux';
import { setSearchByTrackTitle } from '../../../redux/music/musicSlice';
import { selectSearchByTrackTitle } from '../../../redux/selectedFile/selectedFile';
import * as S from './CenterBlockSearch.style';

function CenterBlockSearch() {

  const dispatch = useDispatch()
  const searchByTrackTitle = useSelector(selectSearchByTrackTitle)
  const handleSearchByTrackName = (e) => {
    dispatch(setSearchByTrackTitle(e.target.value))
  }

  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        value={searchByTrackTitle}
        placeholder="Поиск"
        name="search"
        onChange={handleSearchByTrackName}
      />
    </S.CenterBlockSearch>
  );
}

export default CenterBlockSearch;