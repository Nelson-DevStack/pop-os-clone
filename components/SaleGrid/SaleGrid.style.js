import styled from "styled-components";

export const SalesSection = styled.section`
  width: 100%;
  padding: 2em 1rem;
`

export const SalesContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  color: ${props => props.theme.cardColor};
`

export const SalesHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & div{
    width: 100%;
  }

  @media (max-width: 1000px){
    margin-bottom: 15px;
    flex-direction: column-reverse;
  }
`

export const SalesTitle = styled.h2`
  font-size: 2.1rem;
  font-family: Fira sans, sans-serif;
  font-weight: 400;
  letter-spacing: .15em;
  text-transform: uppercase;
`

export const LgLines = styled.div`
  height: 2px;
  margin: 15px 0;
  width: 100%;

  background: linear-gradient(90deg, #63b1bc 10%, #9cffea 70%, #00496d);
  position: relative;

  &::before{
    content: "";
    background: linear-gradient(90deg, #63b1bc 10%, #9cffea 70%, #00496d);
    position: absolute;
    height: 2px;
    margin-top: 10px; 
    width: 100%;
  }

  &::after{
    content: "";
    background: linear-gradient(90deg, #63b1bc 10%, #9cffea 70%, #00496d);
    position: absolute;
    height: 2px;
    margin-top: 10px;
    width: 100%;
    bottom: 10px;
  }

`

export const SalesFlex = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 970px){
    grid-template-columns: 1fr;
    /* grid-template-rows: 1fr 1fr; */
  }
`

export const SalesContent = styled.div`
  /* width: 50%; */
  padding-right: 2em;
`

export const SaleTitle = styled.h2`
  font-size: 1.8rem;
  font-family: Fira sans, sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
`

export const SaleText = styled.p`
  font-size: 1.3rem;
  margin: 1em 0;
  line-height: 1.5;
`

// Cards
export const SalesCardsGrid = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 970px){
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`

export const SaleCard = styled.a`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .imageWrapper{
    max-width: 300px;
    padding: 2rem;
  }
`