import { useParams } from "react-router-dom";
import { ArrayCollectionPages } from '../ArrayCollectionPages';
import * as S from './ProfileCollectionPages.style';

export const ProfileCollectionPages = () => {

  const params = useParams();
  const collection = ArrayCollectionPages.find((collection) => collection.id === Number(params.id))

  return (
    <S.CollectionPage>{collection.namePage}</S.CollectionPage>
  );
}