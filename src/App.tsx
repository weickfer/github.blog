import { ThemeProvider } from "styled-components";
import { Cover } from "./components/Cover";
import { GithubContextProvider } from "./contexts/GithubAPIContext";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubContextProvider>
        <Cover />
        <GlobalStyle />

        <main id="root">
          <Routes />
        </main>
      </GithubContextProvider>
    </ThemeProvider>
  )
}
