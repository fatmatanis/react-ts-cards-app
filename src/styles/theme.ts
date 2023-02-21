import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
      dark: "#000"
    },
    secondary: {
      main: grey[800],
      dark: grey[900]
    }
  },
  typography: {
    fontFamily: "Helvetica"
  }
});
