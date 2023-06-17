import "./App.css";
import "../src/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Header from "./components/Header";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
