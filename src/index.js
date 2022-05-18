import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import defaultTheme from "@mui/material/styles/defaultTheme";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/inter";

ReactDOM.render(
  <Router>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </Router>,
  document.getElementById("root")
);
