import "./App.css";
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import SmallButton from "./components/SmallButton";
import { ThemeProvider } from "styled-components";
import SigningButton from "./components/SigningButton";
import Signup from "./pages/join/Signup";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      {/* <SigningButton text="" isActive={true} />
      <SmallButton text="" isActive={true} /> */}
      <Signup></Signup>
    </ThemeProvider>
  );
}

export default App;
