import styled from 'styled-components';

export const RaspSection = styled.section`
  width: 100%;
  padding: 2em 1rem;
`

export const RaspContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.cardColor};

  & .imageWrapper{
    width: 40%;
    padding-right: 4em;
  }

  @media (max-width: 960px){
    flex-direction: column;

    .imageWrapper{
      width: 100%;
      padding-right: 0;
    }
  }
`

export const RaspContent = styled.div`
  width: 60%;

  @media (max-width: 960px){
    width: 100%;
  }
`

export const RaspTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: .15em;
  font-family: Fira Sans, sans-serif;
  font-size: 2.1rem;
  margin: 20px 0;
`

export const RaspSubtitle = styled.h2`
  text-transform: capitalize;
  font-weight: 400;
  font-family: Roboto slab, serif;
  font-size: 1.8rem;
  margin: 20px 0;
`

export const RaspText = styled.p`
  font-size: 1.3rem;
  margin: 20px 0;
  line-height: 1.5;

`

export const RaspBtn = styled.a`
  padding: .6em;
  letter-spacing: 1px;
  border-radius: .25em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: #6acad8;
  font-family: Roboto slab, serif;
  cursor: pointer;
  margin: 15px 0;
  color: #000;
`