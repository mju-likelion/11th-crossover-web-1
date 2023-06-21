import "./App.css";
import "../src/styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Post from "./pages/post/Post";
import Content from "./pages/content/Content";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Content />} />
          <Route path="/write" element={<Post />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
