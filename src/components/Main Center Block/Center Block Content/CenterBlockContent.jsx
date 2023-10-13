import { useEffect, useState } from "react";
import ArrayMusic from '../../Array/ArrayMusic';
import * as S from './CenterBlockContent.style'

function CenterBlockContent() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  })

  return (

    <S.CenterBlockContent>
      <S.ContentTitle>
        <S.Col01>ТРЕК</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlayListTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlayListTitleSvg>
        </S.Col04>
      </S.ContentTitle>
      <S.ContentPlaylist>
        {ArrayMusic.map((music) => (
          <S.PlayListItem key={music.id}>
            <S.PlayListTrack>
              <S.TrackTitle>
                {loading ? (
                  <S.SkeletonTitleImage />
                ) : (
                  <S.TrackTitleImage>
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.TrackTitleSvg>
                  </S.TrackTitleImage>
                )
                }
                {loading ? (
                  <S.SkeletonTitleText />
                ) : (
                  <S.TrackTitleText>
                    <S.TrackTitleLink href="http://">
                      {music.trackName}
                      <S.TrackTitleSpan>{music.addition}</S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </S.TrackTitleText>
                )}
              </S.TrackTitle>
              {loading ? (
                <S.SkeletonAuthor />
              ) : (
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">
                    {music.trackAuthor}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
              )}
              {loading ? (
                <S.SkeletonAlbum />
              ) : (
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">
                    {music.album}
                  </S.TrackAlbumLink>
                </S.TrackAlbum>
              )}
              <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                {loading ? (
                  <S.TrackTimeText>0:00</S.TrackTimeText>
                ) : (
                  <S.TrackTimeTextSpan>{music.time}</S.TrackTimeTextSpan>
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