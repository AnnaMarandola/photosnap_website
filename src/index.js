import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

let theme = createTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      fontFamily: "DM Sans",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontFamily: "DM Sans",
      fontSize: "3rem",
      fontWeight: 800,
      color: "#231140",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontFamily: "DM Sans",
      fontSize: "1.7rem",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1.7rem",
      fontWeight: 400,
      color: "#231140",
      textTransform: "uppercase",
      fontFamily: "DM Sans",
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
    },
    h5: {
      fontSize: "1.7rem",
      fontWeight: 450,
      color: "#031627",
      fontFamily: "DM Sans",
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 550,
      color: "#031627",
      fontFamily: "DM Sans",
      "@media (max-width:600px)": {
        fontSize: "1.0rem",
      },
    },
    body1: {
      fontSize: "1.3rem",
      fontFamily: "DM Sans",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "1.3rem",
      fontFamily: "DM Sans",
      fontWeight: 550,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "DM Sans",
      },
    },
    MuiLink: {
      textDecoration: "none",
    },
  },
  palette: {
    primary: {
      main: "#000",
      lightGrey: "#DFDFDF",
      pureWhite: "#FFF",
    },
    secondary: {
      main: "#f51735",
    },
    background: {
      default: "#FFFFF",
    },
    text: {
      primary: "#000",
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,

  document.getElementById("root")
);

reportWebVitals();
