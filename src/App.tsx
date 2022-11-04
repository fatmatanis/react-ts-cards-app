import React from "react";
import { ThemeProvider } from "@emotion/react";
import CardItem from "./components/CardItem";
import { imageText } from "./constant/imageText";
import { theme } from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardItem cards={imageText} />
    </ThemeProvider>
  );
}

export default App;
