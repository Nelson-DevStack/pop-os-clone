import styled from "styled-components";

export const ToolsSection = styled.section`
  width: 100%;
  padding: 2em 1rem;
`

export const ToolsContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  color: ${props => props.theme.cardColor};
`

export const ToolsHeader = styled.div`
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

export const Title = styled.h2`
  width: 100%;
  font-family: Fira Sans, sans-serif;
  font-size: 1.8em;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: .15em;
`

export const ToolsFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* margin: 15px 0; */
  align-items: center;
  gap: 2em;

  @media (max-width: 1000px){
    grid-template-columns: 1fr;
  }
`

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`

export const IconGrid = styled.div`
  margin-bottom: 10px;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 800px;
  margin: 1rem auto;
  
  @media (max-width: 600px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 375px){
    width: 100%;
    padding: 0;
  }

`

export const IconLink = styled.a`
  padding: 15px ;
  max-height: 10ch;
  
  & .imageWrapper{
    display: flex;
    justify-content: center;
    height: 63px;
    align-items: center;

    @media (max-width: 1000px){
      height: 63px;
    }
  }

`

export const IconImg = styled.img`

`

export const Lines = styled.div`
  width: 100%;
  height: 2px;
  margin: 8px 0;
  background: linear-gradient(90deg,#63b1bc 10%,#9cffea 70%,#00496d);
`