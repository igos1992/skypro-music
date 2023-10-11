import * as S from './Track-PlayLikeDis.style';

function TrackPlayLikeDis() {
  return (
    <S.TrackPlayLikeSis>
      <S.TrackPlayLike>
        <S.TrackPlayLikeSvg alt="like">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </S.TrackPlayLikeSvg>
      </S.TrackPlayLike>
      <S.TrackPlayDislike>
        <S.TrackPlayDislikeSvg alt="dislike">
          <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
        </S.TrackPlayDislikeSvg>
      </S.TrackPlayDislike>
    </S.TrackPlayLikeSis>
  );
}

export default TrackPlayLikeDis;