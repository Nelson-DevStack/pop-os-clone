import styled from 'styled-components';

export const NavBar = styled.header`
  width: 100%;
  background-color: #f6f6f6;
  padding: 0 1rem;
`

export const NavBarContainer = styled.nav`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  flex-wrap: wrap;

  @media (max-width: 910px){
    flex-direction: column;

    & *{
      margin: 5px 0;
    }
  }
`

export const NavBarLogo = styled.a`
  & .imageWrapper{
    width: 15em;
  }
`

export const NavBarLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const NavItem = styled.li`
  margin: 0px 15px;

  @media (max-width: 970px){
    margin: 15px 15px;
  }
`

export const NavLink = styled.a`
  font-family: Roboto Slab, serif;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: 300ms ease;

  &:hover{
    box-shadow: rgba(255, 196, 90, 0.9) 0px 3px 8px;
  }
`


export const NavBarIcons = styled.div`
  display: flex;
`

export const NavBarIconLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: 300ms ease;
  cursor: pointer;
  
  &:hover{
    box-shadow: rgba(255, 196, 90, 0.9) 0px 3px 8px;
  }
`
