import PlayerControls from './Player Controls/PlayerControls';
import TrackPlayLikeDis from './Track-Play Like-Dis/Track-PlayLikeDis';
import BarVolumeBlock from './Bar Volume-Block/BarVolumeBlock';
import * as S from './Bar.style';

function Bar({ currentMusic }) {

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <PlayerControls />
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink >
                    {currentMusic.name}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum >
                  <S.TrackPlayAlbumLink >
                    {currentMusic.author}
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
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