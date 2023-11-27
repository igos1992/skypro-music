import { styled,  } from 'styled-components';

export const CenterblockH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`;

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 1080px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`
export const SpanNotTracksFavorite = styled.span`
  font-family: 'StratosSkyeng';
  font-size: 30px;
  margin-top: 50px;
  text-align: justify;
`

export const SpanErrorBlock = styled.span`
  font-family: 'StratosSkyeng';
  font-size: 30px;
  color: red;
`