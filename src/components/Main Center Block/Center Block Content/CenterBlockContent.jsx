import * as S from './CenterBlockContent.style';
import { ContentTitle } from '../ContentTitle/ContentTitle'

function CenterBlockContent({
  loading,
  arrayMusicAll,
  addTodoError,
  handleCurrentMusic
}) {

  function convertTime(time) {
    const min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
      sec = `0${sec}`
    }

    return `${min}:${sec}`;
  }

  return (
    <S.CenterBlockContent>
      <ContentTitle />
      <S.ContentPlaylist>
        <S.SpanErrorBlock>{addTodoError}</S.SpanErrorBlock>
        {arrayMusicAll.map((music) => (
          <S.PlayListItem key={music.id}>
            <S.PlayListTrack>
              <S.TrackTitle>
                {loading ? (
                  <S.TrackTitleImage>
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
                    <S.TrackTitleLink onClick={() => handleCurrentMusic(music)}>
                      {music.name}
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
                    {music.author}
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
              <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                {loading ? (
                  <S.TrackTimeTextSpan>{convertTime(music.duration_in_seconds)}</S.TrackTimeTextSpan>
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

export default CenterBlockContent;