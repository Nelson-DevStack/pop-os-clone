import styled from "styled-components";

export const EndSection = styled.section`
  width: 100%;
  background: linear-gradient(#e1d5dc,#f2d8db 10%,#d0d9d1 30%,#a8ebe0);
  clip-path: ellipse(60% 100% at 50% 100%);
  display: flex;
  align-items: center;
  padding: 5vw;

  @media (max-width: 1120px){
    clip-path: ellipse(170% 100% at 50% 100%);
    padding: 0;
  }
`

export const EndContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`

export const EndContent = styled.div`
  max-width: 84ch;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  margin: auto;

  & .btnWrapper{
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
`

export const EndText = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  text-align: center;
`

export const LinkBtn = styled.a`
  padding: .6em;
  background-color: ${props => props.btnBg};
  border-radius: .25em;
  text-transform: uppercase;
  font-family: Roboto slab, serif;
  letter-spacing: 1px;
  margin: 0 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EndLinks = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 640px){
    flex-direction: column;
  }
`

export const EndLink = styled.a`
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 3px;
  transition-duration: .1s;
  font-weight: 700;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover{
    border: 1px solid white;
    box-shadow: 0 0 8px rgba(250,250, 250,0.7),0 0 1px rgba(250,250, 250,0.7);
  }

  & svg{
    margin-bottom: 15px;
  } 
`