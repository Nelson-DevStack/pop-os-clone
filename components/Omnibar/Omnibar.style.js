import styled from 'styled-components';

export const OmniBar = styled.div`
  width: 100%;
  min-height: 3rem;
  padding: .5rem .8rem;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: rgba(87, 79, 74, 0.8);
  z-index: 10;
`
export const OmniBarContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OmniBarButton = styled.a`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: Roboto Slab, serif;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  border: .15em solid #fafafa;
  border-radius: .25em;
  color: #fafafa;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover{
    background-color: #faa41a;
  }

  @media (max-width: 600px){
    width: 100%;
    margin: 0 3px;
  }
`

export const OmniBarTextLink = styled.a`
  padding: 0px 15px;
  color: #fafafa;
  text-align: center;
  font-family: Fira Sans, sans-serif;
  margin: auto;
  text-align: center;
  cursor: pointer;

  @media (max-width: 1000px){
    display: none;
  }
`