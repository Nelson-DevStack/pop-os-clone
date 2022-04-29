import styled from 'styled-components';

export const IntroStyle = styled.section`
  width: 100%;
  background-color: ${props => props.theme.introBgColor};
  transition: 200ms;
  padding: 0 1rem;
`

export const IntroContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 96px 1rem;
  display: flex;
  justify-content: space-between;

  & .imageWrapper{
    width: 250px;
  }

  @media (max-width: 1280px){
    justify-content: center;
  }
`

export const IntroContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1280px){
    width: 100%;
    max-width: 80ch;
    margin: 0 7px;
  }
`

export const IntroTitle = styled.h1`
  font-size: 1.8rem;
  font-family: Roboto slab, serif;
  transition: 200ms;
  color: ${props => props.theme.introTextColor};
`

export const IntroText = styled.p`
  margin: 15px 0;
  font-size: 1.3rem;
  font-family: Fira sans, sans-serif;
  transition: 200ms;
  color: ${props => props.theme.introTextColor};
`

export const IntroButtonsArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 375px){
    flex-direction: column;
  
    & a{
      width: 100%;
      text-align: center;
      margin: 10px 0;
    }
  }
`

export const IntroButton = styled.a`
  font-family: Roboto slab, serif;
  padding: .4em .6em;
  border-radius: .25em;
  background-color: ${(props) => props.bgcolor ? props.bgcolor : "#21e412"};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  &:not(:first-child){
    margin: 0 4px;
  }
`

export const IntroImageArea = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  
  @media (max-width: 1280px){
    display: none;
  }
`