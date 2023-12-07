import CenterBlockFilter from '../../components/Main Center Block/Center Block Filter/CenterBlockFilter';
import CenterBlockContent from '../../components/Main Center Block/CenterBlockContent';
import * as S from './MainPage.Style'

export function MainPage() {
  return (
    <>
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <CenterBlockFilter />
      <CenterBlockContent />
    </>
  );
}
