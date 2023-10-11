import { styled } from 'styled-components';

export const TrackPlayLikeSis = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-left: 26%;
`;

export const TrackPlayLike = styled.div`
padding: 5px;
&:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}
&:active svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}
`;

export const TrackPlayLikeSvg = styled.svg`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;
  cursor: pointer;
`;

export const TrackPlayDislike = styled.div`
padding: 5px;
margin-left: 28.5px;
&:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}
&:active svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
 
}
`;

export const TrackPlayDislikeSvg = styled.svg`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;
`;