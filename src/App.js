import "./App.css";
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import SmallButton from "./components/SmallButton";
import { ThemeProvider } from "styled-components";
import LargeButton from "./components/LargeButton";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <LargeButton text="" isActive={true} />
      <SmallButton text="" isActive={true} />
    </ThemeProvider>
  );
}

export default App;
