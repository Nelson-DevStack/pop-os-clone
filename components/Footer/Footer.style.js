import styled from 'styled-components';

export const FooterStyle = styled.footer`
  width: 100%;
  background-color: #574f4a;
`

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`

export const FooterNav = styled.nav`
  width: 100%;
  padding: .5rem .5rem 0;
  display: flex;

  @media (max-width: 800px){
    flex-direction: column;
  }
`

export const FooterCol = styled.div`
  flex: 0 0 15rem;
  display: flex;
  flex-direction: column;
`

export const FooterBgCol = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 700px){
    align-items: center;
  }
`

export const FooterColWrapper = styled.div`
  max-width: 35ch;
  text-align: center;
  margin: .5rem 0;
`

export const FooterColText = styled.p`
  color: #f6f6f6;
  text-align: center;
  line-height: 1.5;
`

export const FooterLink = styled.a`
  color: #f6f6f6;
  padding: .5rem;
  font-family: Fira Sans, sans-serif;
  cursor: pointer;
  text-transform: capitalize;

  &:hover{
    text-decoration: underline;
  }
`

export const FooterBtn = styled.button`
  background-color: #6acad8;
  padding: .6em .9em;
  font-size: 1rem;
  border: none;
  border-radius: .25em;
  text-transform: uppercase;
  font-family: Fira Sans, sans-serif;
  margin: 10px 3px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const FooterSocial = styled.div`
  margin: .5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px){
    justify-content: center;
  }
`

export const SocialLink = styled.a`
  color: #f6f6f6;
  font-size: 2.2rem;
  cursor: pointer;
  margin: .5rem;

  &:hover{
    color: #ffa300;
  }
`

export const FooterCopy = styled.div`
  text-align: center;
  color: #f6f6f6;
  padding: .5rem 0 1.2rem 0;
`

export const FooterCopyright = styled.p`
  font-weight: 400;
  font-family: Roboto slab, serif;
  padding: .5rem 0;
`

export const FooterTrademark = styled.p`
  font-size: .675rem;
  font-weight: 300;
  font-family: Roboto slab, serif;
`