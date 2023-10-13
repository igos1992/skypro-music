import PlayerControls from './Player Controls/PlayerControls';
import { useEffect, useState } from "react";
import TrackPlayLikeDis from './Track-Play Like-Dis/Track-PlayLikeDis';
import BarVolumeBlock from './Bar Volume-Block/BarVolumeBlock';
import * as S from './Bar.style';

function Bar() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  })

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <PlayerControls />
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                {loading ? (
                  <S.SkeletonTrackPlayImage />
                ) : (
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                )}
                {loading ? (
                  <S.SkeletonTrackPlayAuthor />
                ) : (
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="http://">
                      Ты та...
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                )}
                {loading ? (
                  <S.SkeletonTrackPlayAlbum />
                ) : (
                  <S.TrackPlayAlbum >
                    <S.TrackPlayAlbumLink href="http://">
                      Баста
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                )}
              </S.TrackPlayContain>
              <TrackPlayLikeDis />
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <BarVolumeBlock />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}

export default Bar;