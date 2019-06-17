import React from 'react';
import styled from 'styled-components'

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const TopBarContainer = styled(TopBarDiv)`
  justify-content: none;
  position: none;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
     width: 1280px;
    }
`
const TopBarContainerLeft = styled.div`
   display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const LeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const TopBarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const ContainerSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:hover{
    text-decoration: underline;
  }
`
const LastcontainerSpan = styled(ContainerSpan)`
  margin-right: 0;
`
const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const RightSpan = styled.span`
  cursor: pointer;
`
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <TopBarContainerLeft>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>Search</LeftSpan>
        </TopBarContainerLeft>
        <TopBarCenter>
          <ContainerSpan>GENERAL</ContainerSpan><ContainerSpan>BROWNBAG</ContainerSpan><ContainerSpan>RANDOM</ContainerSpan><ContainerSpan>MUSIC</ContainerSpan><LastcontainerSpan>ANNOUNCEMENTS</LastcontainerSpan>
        </TopBarCenter>
        <ContainerRight>
          <RightSpan>LOG IN</RightSpan>
        </ContainerRight>
      </TopBarContainer>
    </TopBarDiv>
  )
}

export default TopBar;