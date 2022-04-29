import styled from 'styled-components';

export const SecureSection = styled.section`
  width: 100%;
  padding: 2em 1rem;
`

export const SecureContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`

export const SecureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  & .imageWrapper{
    grid-row: 1/3;
    max-width: 400px;
    margin: auto;
  }

  @media (max-width: 1000px){
    grid-template-columns: 1fr 1fr;  

    .imageWrapper{
      grid-column: span 2;    
      margin: auto;

    }
  }

  @media (max-width: 800px){
    display: flex;
    flex-direction: column;
  }
`

export const SecureCard = styled.div`
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.cardBorder};
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.cardColor};
  line-height: 1.5;
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.h2`
  font-family: Roboto slab, serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 10px;  
`

export const CardText = styled.p`
  font-size: 1.3rem;

`