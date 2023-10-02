import CenterBlockSearch from './Main Center Block under components/CenterBlockSearch';
import CenterBlockFilter from './Main Center Block under components/CenterBlockFilter';
import CenterBlockContent from './Main Center Block under components/CenterBlockContent';

function MainCenterBlock () {
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