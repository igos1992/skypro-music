import { css, styled } from 'styled-components';

export const ContentTitle = styled.div`
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
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;
`;

export const PlaylistTitleCol = css`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
`;

export const Col01 = styled.div`
width: 447px;
${PlaylistTitleCol};
`;

export const Col02 = styled.div`
width: 321px;
${PlaylistTitleCol};
`;

export const Col03 = styled.div`
width: 245px;
${PlaylistTitleCol};
`;

export const Col04 = styled.div`
width: 60px;
text-align: end;
${PlaylistTitleCol};
`;

export const PlayListTitleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`;