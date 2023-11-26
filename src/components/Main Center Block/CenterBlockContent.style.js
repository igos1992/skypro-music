import { styled } from 'styled-components'

export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

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

export const SpanErrorBlock = styled.span`
  font-family: 'StratosSkyeng';
  font-size: 30px;
  color: red;
`
