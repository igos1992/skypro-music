import * as S from './CenterBlockContent.style';
import { ContentTitle } from './ContentTitle/ContentTitle';
import { useGetAllMusicQuery } from '../../redux/music/serviceQuery';
import { ActiveArrayTrackList } from '../ActiveArrayTrackList/ActiveArrayTrackList';
import Skeleton from '../Array/skeleton';

function CenterBlockContent() {

  const { data, isError, error, isLoading } = useGetAllMusicQuery()

  return (
    <S.CenterBlockContent>
      <ContentTitle />
      <S.ContentPlaylist>
        {isLoading ?
          <Skeleton />
          :
          <>
            {isError && <S.SpanErrorBlock>Не удалось загрузить плейлист, попробуйте позже: {error?.error}</S.SpanErrorBlock>}
            <ActiveArrayTrackList
              data={data}
              isError={isError}
              error={error}
              isLoading={isLoading}
            />
          </>
        }
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default CenterBlockContent;