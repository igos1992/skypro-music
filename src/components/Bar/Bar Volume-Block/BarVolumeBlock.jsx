import * as S from './BarVolumeBlock.style';

function BarVolumeBlock({ setVolumeChange, volumeChange, audioRef }) {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume">
            <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            volume={volumeChange}
            onChange={(event) => {
              let volumeRange = event.target.value / 100;
              audioRef.current.volume = volumeRange;
              setVolumeChange(volumeRange)
            }}
            type="range"
            name="range"
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
}

export default BarVolumeBlock;