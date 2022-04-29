import styled from 'styled-components';

export const ListSect = styled.div`
  width: 100%;
  padding: 2em 1rem;
`

export const ListContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`

export const ListHeader = styled.div`
  width: 80ch;
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 300ms;
  color: ${props => props.theme.cardColor};

  @media (max-width: 768px){
    width: 95%;
  }
`

export const ListTitle = styled.h2`
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

export const ListText = styled.p`
  font-size: 1.3rem;
  width: 90%;
  text-align: left;

  @media (max-width: 768px){
    width: 100%;
    font-size: 1.2rem;
  }
`

export const ListCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 1040px){
    grid-template-columns: 1fr;
    max-width: 60ch;
    margin: auto;
  }
`

export const ListCard = styled.div`
  background-color: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.cardBorder};
  color: ${props => props.theme.cardColor};
  border-radius: 12px;

  display: grid;
  grid-template-columns: auto auto ;
  margin: 10px 0;

  @media (max-width: 480px){
    display: flex;
    flex-direction: column;
  }
`

export const ListCardContent = styled.div`
  padding: 1.8rem;

  @media (max-width: 480px){
    padding-bottom: .1rem;
  }
`

export const ListCardTitle = styled.h2`
  margin-bottom: 10px;
  font-family: Fira Sans, sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: ${props => props.txtAlign ? props.txtAlign : "left"};
  text-transform: capitalize;
`

export const ListCardText = styled.p`
  max-width: 60ch;
  margin: 10px 0;
  font-size: 1.3rem;

  @media (max-width: 900px){
    margin: auto;
  }
`

export const ListUl = styled.ul`
  padding: 1.8rem;
  width: 20ch;
  border-left: 1px solid #c8c8c8;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  position: relative;

  & li{
    margin: 6px 0;
    margin-left: 20px;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  & li::before{
    content: "";
    position: absolute;
    background-color: orange;
    width: 15px;
    height: 15px;
    margin: auto;
    margin-left: -1.5rem;
    border-radius: 50%;
    border: 1.90px solid #222;
  }
`
