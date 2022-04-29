import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  main{
    background-color: ${props => props.theme.contentBgColor};
    transition: 200ms;
  }
`

export default GlobalStyle;