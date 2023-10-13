import CenterBlockSearch from './Center Block Search/CenterBlockSearch';
import CenterBlockFilter from './Center Block Filter/CenterBlockFilter';
import CenterBlockContent from './Center Block Content/CenterBlockContent';
import * as S from './MainCenterBlock.style';


function MainCenterBlock() {
  return (
    <S.MainCenterblock>
      <CenterBlockSearch />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <CenterBlockFilter />
      <CenterBlockContent />
    </S.MainCenterblock>
  );
}

export default MainCenterBlock;