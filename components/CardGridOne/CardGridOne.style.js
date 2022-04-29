import styled from "styled-components";

export const PresentationStyle = styled.section`
  width: 100%;
  padding: 0 1rem;
`

export const PresentationContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  color: ${props => props.theme.cardColor};
`

export const PresHeader = styled.div`
  width: 80ch;
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 300ms;

  @media (max-width: 768px){
    width: 95%;
  }
`

export const PresTitle = styled.h2`
  margin: 30px auto;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: .15em;
  font-size: 2.1rem;
  font-weight: 300;
  font-family: Fira sans, sans-serif;

  @media (max-width: 768px){
    font-size: 1.6rem;
    font-weight: 400;
  }
`

export const PresText = styled.p`
  font-size: 1.3rem;
  width: 90%;
  text-align: left;

  @media (max-width: 768px){
    width: 100%;
    font-size: 1.2rem;
  }
`

export const BigCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 1280px){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px){
    grid-template-columns: 1fr;
  }
`

export const BigCard = styled.div`
  padding: 1.8rem;
  background-color: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  & .iframeWrapperBigCard {
    width: 100%;
    margin : auto;
    margin-top: 15px;

    & iframe{
      width: 100%;
      height: 319px;
    }
  }

  @media (max-width: 900px){
    h1,h2,h3,h4,h5{
      text-align: center;
    }

    .iframeWrapperBigCard{
      max-width: 55ch;
    }
  }
`

export const MiniCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 1280px){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px){
    grid-template-columns: 1fr;
  }
`

export const MiniCard = styled.div`
  padding: 1.8rem;
  margin: 10px 0;
  background-color: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  & .iframeWrapper{
    width: 100%;
    margin: auto;
    max-width: 55ch;
    margin-top: 15px;
    
    & iframe{
      width: 100%;
      height: 200px;
    }
  }

  @media (max-width: 1280px){
    iframe{
      height: 310px;
    }
  }
`

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-family: Fira Sans, sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: ${props => props.txtAlign ? props.txtAlign : "left"};
  text-transform: capitalize;
`

export const CardText = styled.div`
  max-width: 60ch;
  height: 100%;
  margin: 10px 0;
  font-size: 1.25em;
  font-family: Fira Sans, sans-serif;

  @media (max-width: 900px){
    margin: auto;
  }
`

export const CardTextList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  display: inline;
  width: 100%;
`

export const ListItem = styled.li`
  font-family: Fira Sans, sans-serif;

  & ::before{
    content: "- ";
  }
`