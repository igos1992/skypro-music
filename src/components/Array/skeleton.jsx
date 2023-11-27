import * as S from './skeleton.style';
import ArrayMusic from './ArrayMusic';

function Skeleton({ loading }) {
  return (
    <S.CenterBlockContent>
      <S.ContentPlaylist >
        {ArrayMusic.map((music) => (
          <S.PlayListItem key={music.id} >
            <S.PlayListTrack>
              <S.TrackTitle>
                {loading ? (
                  <S.TrackTitleImage >
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.TrackTitleSvg>
                  </S.TrackTitleImage>
                ) : (
                  <S.SkeletonTitleImage />
                )
                }
                {loading ? (
                  <S.TrackTitleText>
                    <S.TrackTitleLink >
                      {music.trackName}
                      <S.TrackTitleSpan>{music.addition}</S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </S.TrackTitleText>
                ) : (
                  <S.SkeletonTitleText />
                )}
              </S.TrackTitle>
              {loading ? (
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">
                    {music.trackAuthor}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
              ) : (
                <S.SkeletonAuthor />
              )}
              {loading ? (
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">
                    {music.album}
                  </S.TrackAlbumLink>
                </S.TrackAlbum>
              ) : (
                <S.SkeletonAlbum />
              )}
              <S.TrackTime >
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                {loading ? (
                  <S.TrackTimeTextSpan>(music.time)</S.TrackTimeTextSpan>
                ) : (
                  <S.TrackTimeText>0:00</S.TrackTimeText>
                )}
              </S.TrackTime>
            </S.PlayListTrack>
          </S.PlayListItem>
        ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default Skeleton;