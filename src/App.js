import "./App.css";
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import SmallButton from "./components/SmallButton";
import { ThemeProvider } from "styled-components";
import SigningButton from "./components/SigningButton";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SigningButton text="" disabled={true} />
      <SmallButton text="" disabled={true} />
    </ThemeProvider>
  );
}

export default App;
