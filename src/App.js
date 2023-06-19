import "./App.css";
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import Signup from "./pages/join/Signup";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Signup></Signup>
    </ThemeProvider>
  );
}

export default App;
