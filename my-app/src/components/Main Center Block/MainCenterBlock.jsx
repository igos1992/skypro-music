import CenterBlockSearch from './Center Block Search/CenterBlockSearch';
import CenterBlockFilter from './Center Block Filter/CenterBlockFilter';
import CenterBlockContent from './Center Block Content/CenterBlockContent';

function MainCenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <CenterBlockSearch />
      <h2 className="centerblock__h2">Треки</h2>
      <CenterBlockFilter />
      <CenterBlockContent />
    </div>
  );
}

export default MainCenterBlock;