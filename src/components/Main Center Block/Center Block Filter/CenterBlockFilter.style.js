import { styled } from 'styled-components'

export const CenterBlockFilter = styled.div`
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
  margin-bottom: 51px;
  justify-content: space-between;
`

export const FilterNameGenre = styled.div`
  display: flex;
  align-items: center;
`

export const FilterByDate = styled.div`
  display: flex;
  align-items: center;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: inherit;
  color: #ffffff;
  margin-right: 10px;
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
  transition: 0.5s;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
    transition: 0.5s;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
    transform: translateY(2px);
    filter: saturate(100%);
  }
`

export const FilterLength = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  color: #fff;
  background-color: #ad61ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -13px;
  right: 8px;
`

export const FilterMenu = styled.div`
  position: absolute;
  top: 50px;
  width: 248px;
  height: 305px;
  box-sizing: border-box;
  background-color: #313131;
  border-radius: 12px;
  padding: 34px;
  overflow-y: hidden;
`

export const FilterMenuYear = styled(FilterMenu)`
  width: 248px;
  height: 305px;
`

export const FilterList = styled.ul`
  width: 180px;
  height: 305px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  overflow-y: scroll;
  color: #fff;
  color: #ad61ff;
  transition: color 0.3s ease;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 2px;
    height: 65px;
  }
`

export const TextDecoration = styled.a`
  color: #fff;
  &:active {
    color: #ad61ff;
    text-decoration: underline;
    transition: color 0.3s ease;
  }
  &:hover {
    color: #ad61ff;
    text-decoration: underline;
    transition: color 0.3s ease;
  }
`
