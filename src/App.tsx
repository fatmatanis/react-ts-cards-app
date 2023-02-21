import React from "react";

import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
