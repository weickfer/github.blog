import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }
  
  body {
    width: 100%;
    background-color:${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    /* max-width: calc(70rem - 2rem);  */

    main#root {
      margin-top: calc(0px - 88px);
      height: calc(100vh - 18.5rem);
    }
  }
`