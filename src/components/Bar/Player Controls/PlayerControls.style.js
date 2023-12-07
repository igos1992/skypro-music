import { styled } from 'styled-components'

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
  margin-right: 23px;
`

export const PlayerBtnPrev = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 23px;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    transform: scale(1.5); 
   }
`

export const PlayerBtnPlay = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 23px;
  fill: #a53939;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    transform: scale(1.2); 
   }
`

export const PlayerBtnNext = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 24px;
  transition: 0.8s;
  &:hover {
    transform: scale(1.5); 
   }
`

export const PlayerBtnRepeat = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 24px;
  transition: 1s;
  &:hover {
    transform: scale(1.5); 
   }
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
`

export const PlayerBtnShuffle = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  transition: 1s;
  &:hover {
    transform: scale(1.5); 
   }
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
`

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
  cursor: pointer;
`

export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
