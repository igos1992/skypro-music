import ArrayMusic from './ArrayMusic';
import * as S from './skeleton.style';

function Skeleton() {
  return (
    <S.CenterBlockContent>
      <S.ContentPlaylist >
        {ArrayMusic.map((music) => (
          <S.PlayListItem key={music.id} >
            <S.PlayListTrack>
              <S.TrackTitle>
                  <S.SkeletonTitleImage />
                  <S.SkeletonTitleText />
              </S.TrackTitle>
                <S.SkeletonAuthor />
                <S.SkeletonAlbum />
              <S.TrackTime >
                  <S.TrackTimeText>0:00</S.TrackTimeText>
              </S.TrackTime>
            </S.PlayListTrack>
          </S.PlayListItem>
        ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default Skeleton;